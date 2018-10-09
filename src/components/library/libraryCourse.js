import React, {Component} from 'react';
import Icon from '../icon';
import Arrow from '../arrow';

class LibraryCourse extends Component {
    render () {
        return (
            <div className="library-course">
              <div className="library-course__title-arrow">
                <label className="library-course_title">Problem Solving</label>
                { Icon('fas fa-check', 'library-course__icon') }
              </div>
                <Arrow className="library-course__arrow"/>

                <div className="library-course_description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod eros in mattis gravida. Pellentesque congue risus purus, quis porttitor nisl euismod rutrum. Cras convallis leo sit amet nisi volutpat faucibus.</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;