import { text } from "ionicons/icons";

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
        height: 40,
        width: '100%',
        backgroundColor: "#000000",
        borderRadius: 50,
        margin: 0,
        paddingLeft: 10,
        paddingRight: 10

    }
  
    const fillerStyles = {
        transition: 'width 1s ease-in-out',
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor ? bgcolor : 'red',
        borderRadius: 'inherit',
        textAlign: 'right'
    }
  
    const labelStyles = {
        padding: 0,
        paddingTop: '3px',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '30px',
        margin: '20px',
        height: '100%',
        minWidth: '100px',
        textAlign: 'center',
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <div style={labelStyles}>{`${completed}%`}</div>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;