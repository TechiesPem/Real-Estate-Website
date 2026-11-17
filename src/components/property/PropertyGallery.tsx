"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import type { PropertyImage } from "@/types/site";

type Props = {
  images: PropertyImage[];
  title: string;
  note?: string;
};

export function PropertyGallery({ images, title, note }: Props) {
  const [index, setIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const count = images.length;
  const current = images[index];
  const hasMany = count > 1;

  const go = useCallback(
    (step: number) => setIndex((i) => (i + step + count) % count),
    [count],
  );

  // Keep the active thumbnail in view.
  useEffect(() => {
    const thumb = thumbsRef.current?.children[index] as HTMLElement | undefined;
    thumb?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  }, [index]);

  const openViewer = () => dialogRef.current?.showModal();
  const closeViewer = () => dialogRef.current?.close();

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (!hasMany) return;
    if (event.key === "ArrowRight") go(1);
    if (event.key === "ArrowLeft") go(-1);
  };

  return (
    <div className="gallery" onKeyDown={onKeyDown}>
      <div className="gallery-stage">
        <button
          aria-label={`Open photo ${index + 1} of ${count} full screen`}
          className="gallery-open"
          onClick={openViewer}
          type="button"
        >
          <Image
            alt={current.alt}
            fill
            key={current.src}
            preload={index === 0}
            sizes="(max-width: 1100px) 100vw, 1200px"
            src={current.src}
          />
        </button>

        {hasMany ? (
          <>
            <button aria-label="Previous photo" className="gallery-arrow gallery-prev" onClick={() => go(-1)} type="button">
              <Icon name="chevronLeft" size={22} />
            </button>
            <button aria-label="Next photo" className="gallery-arrow gallery-next" onClick={() => go(1)} type="button">
              <Icon name="chevronRight" size={22} />
            </button>
          </>
        ) : null}

        <div className="gallery-meta">
          {hasMany ? (
            <span aria-live="polite">
              {index + 1} / {count}
            </span>
          ) : null}
          <button className="gallery-expand" onClick={openViewer} type="button">
            <Icon name="expand" size={16} />
            Full screen
          </button>
        </div>
      </div>

      {hasMany ? (
        <div aria-label="Photos" className="gallery-thumbs" ref={thumbsRef}>
          {images.map((image, i) => (
            <button
              aria-current={i === index ? "true" : undefined}
              aria-label={`Show photo ${i + 1}: ${image.alt}`}
              className="gallery-thumb"
              key={image.src}
              onClick={() => setIndex(i)}
              type="button"
            >
              <Image alt="" fill sizes="140px" src={image.src} />
            </button>
          ))}
        </div>
      ) : null}

      {note ? <p className="gallery-note">{note}</p> : null}

      <dialog
        aria-label={`${title} photos`}
        className="viewer"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeViewer();
        }}
        onKeyDown={onKeyDown}
        ref={dialogRef}
      >
        <div className="viewer-top">
          <span>
            {title}
            {hasMany ? ` · ${index + 1} / ${count}` : null}
          </span>
          <button aria-label="Close" className="viewer-close" onClick={closeViewer} type="button">
            <Icon name="close" size={22} />
          </button>
        </div>
        <div className="viewer-stage">
          <Image alt={current.alt} fill key={current.src} sizes="100vw" src={current.src} />
          {hasMany ? (
            <>
              <button aria-label="Previous photo" className="gallery-arrow gallery-prev" onClick={() => go(-1)} type="button">
                <Icon name="chevronLeft" size={24} />
              </button>
              <button aria-label="Next photo" className="gallery-arrow gallery-next" onClick={() => go(1)} type="button">
                <Icon name="chevronRight" size={24} />
              </button>
            </>
          ) : null}
        </div>
        <p className="viewer-caption">{current.alt}</p>
      </dialog>
    </div>
  );
}
