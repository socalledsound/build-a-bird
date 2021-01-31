alert = (tSc) => {
    this.myRef = React.createRef();
    if(tSc === timerStates.COMPLETE)
     return (
      <audio ref={this.myRef} src={soundfile} autoPlay/>
     )
   }