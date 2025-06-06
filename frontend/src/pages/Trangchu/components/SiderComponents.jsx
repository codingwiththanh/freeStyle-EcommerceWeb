import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const AutoplayPlugin = (slider) => {
  let timeout
  let mouseOver = false

  function clearNextTimeout() {
    clearTimeout(timeout)
  }

  function nextTimeout() {
    clearTimeout(timeout)
    if (mouseOver) return
    timeout = setTimeout(() => {
      slider.next()
    }, 1000)
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true
      clearNextTimeout()
    })
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false
      nextTimeout()
    })
    nextTimeout()
  })
  slider.on("dragStarted", clearNextTimeout)
  slider.on("animationEnded", nextTimeout)
  slider.on("updated", nextTimeout)
}

const SiderComponents = () => {
  const banners = [
    "media/banner-home/banner_1.jpg",
    "media/banner-home/banner_2.jpg",
    "media/banner-home/banner_3.jpg",
    "media/banner-home/banner_4.jpg",
    "media/banner-home/banner_5.jpg"
  ]

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: { perView: 1 },
    },
    [AutoplayPlugin]
  )

  return (
    <div className="my-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={sliderRef} className="keen-slider overflow-hidden">
          {banners.map((src, index) => (
            <div key={index} className="keen-slider__slide">
              <img
                src={src}
                alt={`banner ${index + 1}`}
                className="w-full h-[550px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SiderComponents
