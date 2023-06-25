import Image from "next/image"

const Avatar = ({ alt, src, width, height, styles }) => {
  return (
    <Image
      src={src}
      width={width || 500}
      height={height || 500}
      alt={alt}
      className={styles}
    />
  )
}

export default Avatar