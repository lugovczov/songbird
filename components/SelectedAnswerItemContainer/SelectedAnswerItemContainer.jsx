import React from 'react';
import './SelectedAnswerItemContainer.scss';
import { ImageItem } from '../ImageItem/ImageItem';
import H5AudioPlayer from 'react-h5-audio-player';

export const SelectedAnswerItemContainer = ({
  currentQuestionItem,
  trueAnswer,
}) => {
  // TODO not true answer, necessary click on item state
  return !trueAnswer ? (
    <div className="selected-answer-container bg-primary ml-2 pt-2 pb-1 pl-2 pr-2 text-center text-white">
      <ImageItem imageSrc={currentQuestionItem.image} />
      <h4 className="text-white mt-3 ml-3 text-left">
        {currentQuestionItem.name}
      </h4>
      <hr className="my-2 bg-white mr-3 ml-3" />
      <h6 className="text-white mt-2 ml-3 text-left">
        {currentQuestionItem.species}
      </h6>
      <hr className="my-2 bg-white mr-3 ml-3 mb-3" />
      <H5AudioPlayer
        src={currentQuestionItem.audio}
        autoPlayAfterSrcChange={false}
      />
      <p className="text-left ml-3 mr-3 mt-2">
        {currentQuestionItem.description}
      </p>
    </div>
  ) : (
    <div className="selected-answer-container bg-primary ml-2 pt-2 pl-2 ">
      <p className="m-0">
        <span className="d-block"> Послушайте плеер.</span>
        <span>Выберите птицу из списка</span>
      </p>
    </div>
  );
};
