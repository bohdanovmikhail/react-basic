import React from 'react';
import './styles.scss';

export class TimeCounter extends React.Component {
    constructor(props) {
        super(props);

        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.reset = this.reset.bind(this);

        this.startTime = 0;
        this.state = {
            totalTime: 0,
        };
    }

    render() {
        return (
            <div className="timer">
                {this.getTime()}
                {this.getControls()}
            </div>
        );
    }

    getTime() {
        let [hours, minutes, seconds, milliseconds] = parseTime(this.state.totalTime);

        hours = zeros(hours, 2);
        minutes = zeros(minutes, 2);
        seconds = zeros(seconds, 2);
        milliseconds = zeros(milliseconds, 3);

        return (
            <div className="time">
                {hours}:{minutes}:{seconds}.{milliseconds}
            </div>
        );
    }

    getControls() {
        return (
            <div className="btn-group controls">
                {this.getButton('play', 'play', this.play)}
                {this.getButton('pause', 'pause', this.pause)}
                {this.getButton('reset', 'redo-alt', this.reset)}
                {/* {this.getButton('remove', 'trash', () => console.log('remove'))} */}
            </div>
        );
    }

    getButton(buttonClass, iconClass, clickCallBack) {
        return (
            <button
                onClick={clickCallBack}
                className={`btn btn-secondary ${buttonClass}`}
            >
                <i className={`fas fa-${iconClass}`}></i>
            </button>
        )
    }

    play() {
        if (this.timerId) {
            return;
        }

        this.startTime = Date.now() - this.startTime;

        this.timerId = setInterval(() => {
            this.setState({
                totalTime: Date.now() - this.startTime,
            });
        }, 40);
    }

    pause() {
        clearInterval(this.timerId);
        this.timerId = null;
        this.startTime = Date.now() - this.startTime;
    }

    reset() {
        this.pause();
        this.setState({
            totalTime: 0,
        });
        this.startTime = 0;
    }
}

function parseTime(totalMilliseconds) {
    const milliseconds = totalMilliseconds % 1000;
    const totalSeconds = (totalMilliseconds - milliseconds) / 1000;
  
    const seconds = totalSeconds % 60;
    const totalMinutes = (totalSeconds - seconds) / 60;
  
    const minutes = totalMinutes % 60;
    const hours = (totalMinutes - minutes) / 60;
  
    return [hours, minutes, seconds, milliseconds];
  }
  
  function zeros(value, length) {
    return value.toString().padStart(length, '0');
  }
  