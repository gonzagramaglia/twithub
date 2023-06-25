import Image from "next/image"

const Avatar = ({ alt, src, styles }) => {
  return (
    <Image
      src={src}
      width={500}
      height={500}
      alt={alt}
      className={styles}
    />
  )
}

export default Avatar