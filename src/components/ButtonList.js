import { ChevronLeft, ChevronRight } from "lucide-react";
import { Fragment, useEffect, useRef, useState } from "react";
import Button from "./Button";
import { VIDEO_CATEGORY_API } from "../utils/constants";
import useGetData from "../hooks/useGetData";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../store/appSlice";
const TRANSLATE_AMOUNT = 200;
const notWorkingIds = ['18', '19', '21', '27', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44']
const ButtonList = () => {
  const [translate, setTranslate] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const { data: videoCategories } = useGetData(VIDEO_CATEGORY_API, '');
  const categoryId = useSelector(state => state.app.categoryId);

  const containerRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (containerRef.current == null) return;

    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;

      if (container == null) return;

      setIsLeftVisible(translate > 0);
      setIsRightVisible(
        translate + container.clientWidth < container.scrollWidth
      );
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [translate]);

  const clickHandler = (c) => {
    if (categoryId === c.id) {
      return;
    }
    dispatch(addCategory(c.id));

  }


  return (
    <div ref={containerRef} className="overflow-x-hidden relative">
      <div
        className="flex whitespace-nowrap gap-3 transition-transform w-[max-content] px-3 sm:px-0"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {videoCategories?.length > 0 && <Button
          key="all"
          onClick={() => clickHandler({ id: "all" })}
          variant={categoryId === "all" ? "dark" : "default"}
          className="py-1 px-3 rounded-lg whitespace-nowrap"
        >
          All
        </Button>}
        {videoCategories.map((category) => {
          if (!notWorkingIds.includes(category.id)) {
            return <Button
              key={category.id}
              onClick={() => clickHandler(category)}
              variant={categoryId === category?.id ? "dark" : "default"}
              className="py-1 px-3 rounded-lg whitespace-nowrap"
            >
              {category?.snippet?.title}
            </Button>
          }
          return <Fragment key={category.id}></ Fragment>
        })}
      </div>

      {isLeftVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {
              setTranslate((translate) => {
                const newTranslate = translate - TRANSLATE_AMOUNT;
                if (newTranslate <= 0) return 0;
                return newTranslate;
              });
            }}
          >
            <ChevronLeft />
          </Button>
        </div>
      )}

      {isRightVisible && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {
              setTranslate((translate) => {
                if (containerRef.current == null) {
                  return translate;
                }
                const newTranslate = translate + TRANSLATE_AMOUNT;
                const edge = containerRef.current.scrollWidth;
                const width = containerRef.current.clientWidth;

                if (newTranslate + width >= edge) return edge - width;
                return newTranslate;
              });
            }}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ButtonList;
