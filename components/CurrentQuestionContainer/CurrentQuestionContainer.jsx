import React from 'react';
import './CurrentQuestionContainer.scss';
import { ImageItem } from '../ImageItem/ImageItem';
import birdImgFalse from './assets/birdImgFalse.jpg';
import H5AudioPlayer from 'react-h5-audio-player';
import { Star } from '../Star/Star';

export const CurrentQuestionContainer = ({
  currentQuestionItem,
  trueAnswer,
  playerRef,
}) => {
  console.log('Правильный ответ:', currentQuestionItem.name);
  return trueAnswer ? (
    <div className="current-question-container bg-primary mt-3 pt-2 pb-1">
      <ImageItem imageSrc={currentQuestionItem.image} />
      <div className="current-question-wrapper">
        <h3 className="text-white mt-2 ml-3">{currentQuestionItem.name}</h3>
        <hr className="my-4 bg-white mr-3 ml-3" />
        <H5AudioPlayer
          src={currentQuestionItem.audio}
          autoPlayAfterSrcChange={false}
          ref={playerRef}
        />
      </div>
    </div>
  ) : (
    <div className="current-question-container bg-primary mt-3 pt-2 pb-1">
      <ImageItem imageSrc={birdImgFalse} />
      <div className="current-question-wrapper">
        <div className="star-wrapper text-white mt-2 ml-3">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <hr className="my-4 bg-white mr-3 ml-3" />
        <H5AudioPlayer
          src={currentQuestionItem.audio}
          autoPlayAfterSrcChange={false}
        />
      </div>
    </div>
  );
};
