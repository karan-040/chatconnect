import React, { useState, useRef } from 'react'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import axios from 'axios'
import styles from '../UploadDP/UploadDP.module.css'

function UploadDP() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [imageURL, setImageURL] = useState('')
  const [croppedImage, setCroppedImage] = useState(null)
  const cropperRef = useRef(null)

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file)
      setImageURL(URL.createObjectURL(file))
    } else {
      alert('Please upload a valid image file.')
    }
  }

  const handleCrop = () => {
    const cropper = cropperRef.current.cropper
    const canvas = cropper.getCroppedCanvas({
      width: 300, // fixed width
      height: 300, // fixed height
    })
    setCroppedImage(canvas.toDataURL('image/jpeg'))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!croppedImage) {
      alert('Please crop the image before uploading.')
      return
    }

    const formData = new FormData()
    formData.append('file', dataURLtoBlob(croppedImage))

    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      console.log('File uploaded successfully:', response.data)
    } catch (error) {
      console.error('Error uploading file:', error)
    }
  }

  const dataURLtoBlob = (dataURL) => {
    const arr = dataURL.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new Blob([u8arr], { type: mime })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.formModal}>
        <label
          className={styles.uploadContainer}
          style={{
            backgroundImage: croppedImage
              ? `url(${croppedImage})`
              : 'url(https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png)',
          }}
        >
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {!croppedImage && (
            <span className={styles.uploadText}>Upload a picture</span>
          )}
        </label>
        {imageURL ? (
          <div>
            <Cropper
              src={imageURL}
              style={{ height: 400, width: '100%' }}
              initialAspectRatio={1}
              aspectRatio={1}
              guides={false}
              ref={cropperRef}
              viewMode={1}
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
              crop={handleCrop}
            />
            <div className={styles.wrapper}>
              <button
                className={styles.cancel}
                onClick={(e) => {
                  e.preventDefault()
                  setCroppedImage(null)
                  setImageURL('')
                }}
              >
                Cancel
              </button>
              <button type="submit" className={styles.upload}>
                Upload
              </button>
            </div>
          </div>
        ) : (
          <a>I'll do it later</a>
        )}
      </form>
    </div>
  )
}

export default UploadDP
