var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

function dateReducer(acc, timeSlot) {
  let rawDate = new Date(timeSlot.start);
  let thisDate = date = rawDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: '2-digit'
  });

  if (acc.indexOf(thisDate) == -1) {
    const dayObj = new Object();

    dayObj.dateDay = rawDate.toLocaleDateString('en-US', { weekday: 'short' });
    dayObj.dateNum = rawDate.toLocaleDateString('en-US', { day: 'numeric' });
    dayObj.date = thisDate;

    acc.push(dayObj)
  }

  return acc;
}

function SelectDay(props) {
  // 1. grab json data
  const timeslots = require('../utils/timeslots');

  // 2. map over json, return formatted objects
  var dateArray = timeslots.reduce(dateReducer, []
    
    function(jsonData) {
    let rawDate = new Date(jsonData.start);

    const dayObj = new Object();

    dayObj.dateDay = rawDate.toLocaleDateString('en-US', { weekday: 'short' });
    dayObj.dateNum = rawDate.toLocaleDateString('en-US', { day: 'numeric' });
    dayObj.date = thisDate;

    return dayObj;
  });

  // 3. filter to remove duplicates
  function removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }
  var days = removeDuplicates(dateArray, 'date');

  // 4. sort by date
  days.sort(function compare(a, b) {
    let dateA = new Date(a.date);
    let dateB = new Date(b.date);
    return dateA - dateB;
  });

  // 5. add index to each array now that they're in order
  days.map(function(dayObj, index) {
    dayObj.id = index;
  });

  console.log(days);

  return (
    <ul className="datepicker">
      <li>
        <button className="datepicker__btn datepicker__btn--arrow  datepicker__btn--arrow-right">
          <i className="fa fa-arrow-left" />
        </button>
      </li>
      {days.map(function(dateObj) {
        return (
          <li key={dateObj.date}>
            <button
              className={
                dateObj.date === props.selectedDay
                  ? 'datepicker__btn datepicker__btn--date selected'
                  : 'datepicker__btn datepicker__btn--date'
              }
              onClick={props.onSelect.bind(null, dateObj.date)}
            >
              <span>{dateObj.dateDay}</span>
              <span className="number">{dateObj.dateNum}</span>
            </button>
          </li>
        );
      })}
      <li>
        <button className="datepicker__btn datepicker__btn--arrow  datepicker__btn--arrow-left">
          <i className="fa fa-arrow-right" />
        </button>
      </li>
    </ul>
  );
}

function EventGrid(props) {
  return (
    <ul className="eventlist">
      {props.events.map(function(event, index) {
        return (
          <a key={index} href={event.html_url}>
            <li className="eventcard">
              <ul className="eventcard__list">
                <li className="eventcard__time">#{index + 1}</li>
                <li className="eventcard__name">{event.name}</li>
                <li className="eventcard__details">Speaker | Location</li>
                <li className="eventcard__badges">
                  <ul>
                    <li>Expert</li>
                    <li>
                      <i className="fa fa-database" />
                    </li>
                    <li>
                      <i className="fa fa-cloud" />
                    </li>
                    <li>
                      <i className="fa fa-universal-access" />
                    </li>
                    <li>
                      <i className="fa fa-code" />
                    </li>
                    <li>
                      <i className="fa fa-bolt" />
                    </li>
                  </ul>
                </li>
                <li className="eventcard__addbtn">
                  <button>
                    <i className="fa fa-calendar-plus-o" />
                    Add to Agenda
                  </button>
                </li>
                <li className="eventcard__attendees">
                  <i className="fa fa-user-circle" />
                  <i className="fa fa-user-circle" />
                  <i className="fa fa-user-circle" />
                  <i className="fa fa-user-circle" />+ 80
                </li>
              </ul>
            </li>
          </a>
        );
      })}
    </ul>
  );
}

EventGrid.propTypes = {
  events: PropTypes.array.isRequired
};

SelectDay.propTypes = {
  selectedDay: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

class Agenda extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedDay: '2018-09-04', // TODO - set this dynamically to the first day
      events: null
    };

    this.updateDay = this.updateDay.bind(this);
  }
  componentDidMount() {
    this.updateDay(this.state.selectedDay);
  }
  updateDay(date) {
    this.setState(function() {
      return {
        selectedDay: date,
        events: null
      };
    });

    api.fetchEvents(date).then(
      function(events) {
        this.setState(function() {
          return {
            events: events
          };
        });
      }.bind(this)
    );
  }
  render() {
    return (
      <div className="agenda-container">
        <SelectDay
          selectedDay={this.state.selectedDay}
          onSelect={this.updateDay}
        />
        <div className="schedule">
          <div className="schedule__nav">
            <div className="container">
              <ul className="schedule__nav-list">
                <li className="schedule__nav-list-item active">
                  <a tabIndex="0">Full Schedule</a>
                </li>
                <li className="schedule__nav-list-item">
                  <a tabIndex="0">My Agenda</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            {!this.state.events ? (
              <p>LOADING!</p>
            ) : (
              <EventGrid events={this.state.events} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Agenda;