import PropTypes from "prop-types"
import { Button } from '@mui/material'

const ButtonComponent = ({variant, size, text, onClick}) => {
  return (
    <Button variant={variant} size={size} onClick={onClick}>{text}</Button>
  )
}

ButtonComponent.propTypes = {
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired
}

ButtonComponent.defaultProps = {
  variant: "outlined",
  size: "medium",
  onClick: undefined,
}

export default ButtonComponent;