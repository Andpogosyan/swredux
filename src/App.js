import { connect } from 'react-redux';
import './App.css';
import Buttons from './components/buttons';
import Characters from './components/characters';
import { getCharacters } from './actions/characterActions';
import { changeModalStatus } from './actions/modalAction';


function App({error, getCharactersAction, data, isFetching, changeStatusAction, status, whoClick }) {
  
  if(error){
    return (
    <p className="error">Sorry, server don't answer now, please try again later.</p>
    )
  } else {
    return (<div className='App'>
    {data.results && <Characters whoClick={whoClick}
     status={status} 
     changeStatus={changeStatusAction} 
     isFetching={isFetching} 
     results={data.results} /> }
    {!status && <Buttons data={data} getChar={getCharactersAction} />}
  </div>
  );
}}

const mapStateToProps = ({ characterReducer, modalReducer }) => {
  return {
    data: characterReducer.data,
    next: characterReducer.next,
    previous: characterReducer.previous,
    isFetching: characterReducer.isFetching,
    status: modalReducer.status,
    whoClick: modalReducer.whoclick,
    error: characterReducer.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCharactersAction: url => dispatch(getCharacters(url)),
    changeStatusAction: status => dispatch(changeModalStatus(status)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
