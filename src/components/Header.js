import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title = "task Tracer", toggleShow, showAddTask}) => {//!destructur
     /*  const handleClick = () => {
        console.log("click");
      }; */
    return (
      <header className="header">
        <h1>{title}</h1>
        <Button
          toggleShow={toggleShow}
          color ={showAddTask ? "red":"purple"}
          text={showAddTask ? "Close Add Task Bar" : "Show Add Task Bar"}
        />
      </header>
    );
}
/* Header.defaultProps = {
  title: "task Tracer",
}; */
Header.propTypes ={
    title:PropTypes.string.isRequired,
}
export default Header
