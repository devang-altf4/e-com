

import { useState, useRef, useEffect } from "react"

const TiltedCard = ({
  imageSrc,
  altText = "",
  captionText = "",
  containerHeight = "auto",
  containerWidth = "100%",
  imageHeight = "250px",
  imageWidth = "100%",
  rotateAmplitude = 12,
  scaleOnHover = 1.05,
  showMobileWarning = false,
  showTooltip = false,
  displayOverlayContent = false,
  overlayContent = null,
  onClick = null,
  children = null,
  cardContent = null, // New prop for card content below image
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleMouseMove = (e) => {
    if (isMobile || !cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    const rotateXValue = (mouseY / (rect.height / 2)) * -rotateAmplitude
    const rotateYValue = (mouseX / (rect.width / 2)) * rotateAmplitude

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotateX(0)
    setRotateY(0)
  }

  const cardStyle = {
    width: containerWidth,
    height: containerHeight,
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? scaleOnHover : 1})`,
    transition: isHovered ? "transform 0.1s ease-out" : "transform 0.3s ease-out",
    transformStyle: "preserve-3d",
  }

  return (
    <div className="tilted-card-container" style={{ width: containerWidth, height: containerHeight }}>
      {showMobileWarning && isMobile && (
        <div className="mobile-warning text-xs text-gray-500 mb-2">Tilt effect disabled on mobile</div>
      )}

      <div
        ref={cardRef}
        className="tilted-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
        style={cardStyle}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        title={showTooltip ? altText : ""}
      >
        {/* Image Section */}
        <div className="relative overflow-hidden" style={{ height: imageHeight }}>
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={altText}
            className="object-cover w-full h-full"
            style={{
              width: imageWidth,
              height: imageHeight,
            }}
          />

          {displayOverlayContent && overlayContent && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-center p-4">{overlayContent}</div>
            </div>
          )}

          {captionText && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <p className="text-white text-sm font-medium">{captionText}</p>
            </div>
          )}
        </div>

        {/* Card Content Section */}
        {cardContent && <div className="card-content">{cardContent}</div>}

        {children && <div className="absolute inset-0">{children}</div>}
      </div>
    </div>
  )
}

export default TiltedCard
