import { TbChevronRight } from 'react-icons/tb'

function ScrollBtn() {
  return (
    <div className="w-14 h-14 z-50 text-3xl fixed top-[85vh] right-10 bg-black text-gray-20 hover:text-white rounded-full border-[1px] border-yellow-600 shadow-cardShow scrollBtn hover:border-designColor duration-200">
      <button className="w-full h-full flex items-center justify-center relative -rotate-90">
        <TbChevronRight />
      </button>
    </div>
  )
}

export default ScrollBtn
