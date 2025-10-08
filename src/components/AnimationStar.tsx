const AnimationStar = () => {
  return (
    <div className="animated-stars" style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      pointerEvents: 'none',
      zIndex: 0,
      opacity: 0.3
    }}>
      {Array.from({ length: 20 }, (_, i) => (
        <span key={i} className="shooting-star" />
      ))}
    </div>
  )
}

export default AnimationStar
