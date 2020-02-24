import React, { Component } from "react";
import Hour from "./Hour"

export default class Timetable extends Component {
  render() {
    return (
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>
                <abbr title="Hours">Hours</abbr>
              </th>
              <th>
                <abbr title="Monday">Monday</abbr>
              </th>
              <th>
                <abbr title="Tuesday">Tuesday</abbr>
              </th>
              <th>
                <abbr title="Wednesday">Wednesday</abbr>
              </th>
              <th>
                <abbr title="Thursday">Thursday</abbr>
              </th>
              <th>
                <abbr title="Friday">Friday</abbr>
              </th>
              <th>
                <abbr title="Saturday">Saturday</abbr>
              </th>
              <th>
                <abbr title="Sunday">Sunday</abbr>
              </th>
            </tr>
          </thead>
          <tbody>
            <Hour />
            <Hour />
            <Hour />
            <Hour />
          </tbody>
        </table>
      </div>
    );
  }
}
