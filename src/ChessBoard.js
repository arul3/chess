import React ,{ Component } from 'react';

import './ChessBoard.css';

global.defaultChessRow = [];
global.defaultChessRowTwo = [];

global.defaultChessBoard = [[
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 49},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 50},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 51},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 52},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 53},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 54},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 55},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 56}


 ],
 

[

 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 57},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 58},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 59},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 60},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 61},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 62},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 63},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 64}
],

[
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 49},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 50},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 51},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 52},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 53},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 54},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 55},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 56}


 ],
 

[

 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 57},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 58},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 59},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 60},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 61},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 62},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 63},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 64}
],
[
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 49},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 50},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 51},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 52},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 53},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 54},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 55},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 56}


 ],
 

[

 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 57},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 58},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 59},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 60},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 61},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 62},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 63},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 64}
],
[
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 49},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 50},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 51},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 52},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 53},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 54},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 55},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 56}


 ],
 

[

 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 57},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 58},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 59},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 60},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 61},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 62},
 {state: "empty", tilesColor: "black", coinType: "", coinColor: "", id: 63},
 {state: "empty", tilesColor: "white", coinType: "", coinColor: "", id: 64}
]];


 function coinBox (state,tilesColor) { 
				this.state = state,
				this.tilesColor =  tilesColor,
				this.coinType =  "",
				this.coinColor = "" 
};

global.makeRow = function () {

	let color = "white";

	for(var i =0; i < 8 ; i++){

		
		global.defaultChessRow.push( new coinBox("empty",color));

		color = color == "white" ? "black": "white";
	}

	console.log(global.defaultChessRow);
	
}

global.makeRowTwo = function () {

	let color = "black";

	for(var i =0; i < 8 ; i++){

		
		global.defaultChessRowTwo.push(new coinBox("empty",color));

		color = color == "white" ? "black": "white";
	}

	console.log(global.defaultChessRowTwo);
	
}

global.makeDefaultChessBoard = function()
{
	let rowType = "one";

	for(var i=0; i < 8 ; i++){

		let row1 = Object.assign({},global.defaultChessRow);
		let row2 = Object.assign({},global.defaultChessRowTwo);

		rowType == "one"?global.defaultChessBoard.push(row1): global.defaultChessBoard.push(row2);

		rowType = rowType == "one" ? "two" : "one";
	}
}

global.makeUniqueKey = function () {

	for(var i=0; i < 8 ; i++)
		for(var j=0; j<8; j++)
		{
			let key = (i*8 + j)+1;

			global.defaultChessBoard[i][j].id=key;
			console.log( i+" "+j+" "+key);
		}
	
}
global.makeDefaultCoin = function () {


	let coinOrder = ["rook","knight","bishop","queen","king","bishop","knight","rook"];

		for(var j=0; j<8; j++)
		{
			
		global.defaultChessBoard[1][j].coinType="pawn";
		global.defaultChessBoard[1][j].coinColor="black";
		global.defaultChessBoard[1][j].state = "occupied";
		}
			for(var j=0; j<8; j++)
		{
			
		global.defaultChessBoard[6][j].coinType="pawn";
		global.defaultChessBoard[6][j].coinColor="white";
		global.defaultChessBoard[6][j].state = "occupied";

		}

			for(var j=0; j<8; j++)
		{
			
		global.defaultChessBoard[0][j].coinType=coinOrder[j];
		global.defaultChessBoard[0][j].coinColor="black";
		global.defaultChessBoard[0][j].state = "occupied";

		}


			for(var j=0; j<8; j++)
		{
			
		global.defaultChessBoard[7][j].coinType=coinOrder[j];
		global.defaultChessBoard[7][j].coinColor="white";
		global.defaultChessBoard[7][j].state = "occupied";

		}

		
	
}

global.getRowFromKey = function (key) {

		key--;

	 let row = Math.floor(key/8);
		return row;

}

global.getColumnFromKey = function (key) {
	
	key--;

	let column = key % 8;

	return column;
}

global.calulateKey = function (row,col) {
	
	let key = (row*8+col)+1;

	return key;

}
global.getMoves = function (coinType,coinColor,key,chessBoard) {

	let moves =[];

	if(coinType == "pawn")
	{
		moves=	global.getPawnMoves(key,coinColor,chessBoard);
	}

	return moves;
}

global.getPawnMoves = function (key,coinColor,chessBoard) {

	let array = [];
	let row = global.getRowFromKey(key);
	let col = global.getColumnFromKey(key);

	if(coinColor == "black"){

		row++;
	}
	else{
		row--;
	}


	array.push(global.calulateKey(row,col));

	return array;
	
}

global.drawPathInBoard = function (moves,board) {

	for( var i =0; i <moves.length ; i++ ){

		let row = global.getRowFromKey(moves[i]);

		let col = global.getColumnFromKey(moves[i]);

		board[row][col].state= "readyToMove";
	}

	return board;
	
}
global.refreshPathInBoard = function (moves,board) {
	

	for( var i =0; i <moves.length ; i++ ){

		if(moves[i] != 0){

		let row = global.getRowFromKey(moves[i]);

		let col = global.getColumnFromKey(moves[i]);

		board[row][col].state= "empty";
	
		}
	}

	return board;
}

// global.makeRow();
// global.makeRowTwo();
// global.makeDefaultChessBoard();
global.makeUniqueKey();
global.makeDefaultCoin();

console.log(global.defaultChessBoard[0][7]);




class ChessBoard extends Component{

	constructor(props){
		super(props);

		this.state = { ChessBoard : global.defaultChessBoard ,

						event : "onSelect",

						whoseTurn : "white",

						currentCoin : {},

						currentMoves :[]
		 };

		 this.onSelect = this.onSelect.bind(this);
	}

	onSelect(element){

			let board = this.state.ChessBoard;
			let whoseTurn = this.state.whoseTurn;
			let row = global.getRowFromKey(element.id);
			let col = global.getColumnFromKey(element.id);

			console.log(row+" "+col+" point ");

			let  coinBox = board[row][col];
			let coinType = coinBox.coinType;
			let coinColor = coinBox.coinColor; 
			let key = element.id;

			let coin = { coinType : coinType,coinColor : coinColor , key:key };
			
			if(this.state.event == "onSelect" && whoseTurn == coinColor && coinType != "" ){

				board[row][col].tilesColor +=" active" ;

				let currentMoves = global.getMoves(coinType,coinColor,key,board);

				console.log(currentMoves);

				board = global.drawPathInBoard(currentMoves,board);

				this.setState({ ChessBoard : board , event : "onMove", 
					currentCoin : coin , currentMoves: currentMoves});
			}
			if(this.state.event == "onMove" )
			{
				let currentPlaces = this.state.currentMoves;
				let  movableCoin = this.state.currentCoin;

				let row = global.getRowFromKey(movableCoin.key);
				let col = global.getColumnFromKey(movableCoin.key);

				let index = currentPlaces.indexOf(key);
				if( index != -1){

					currentPlaces[index] = 0;
					board[row][col].state = "empty";
					board[row][col].coinType = "";
					board[row][col].coinColor = "";
					board[row][col].tilesColor = board[row][col].tilesColor.replace(" active","");

					let mRow = global.getRowFromKey(key);
					let mCol = global.getColumnFromKey(key);

					board[mRow][mCol].state = "occupied";
					board[mRow][mCol].coinType = movableCoin.coinType;
					board[mRow][mCol].coinColor = movableCoin.coinColor;

					board = global.refreshPathInBoard(currentPlaces,board);

					let turn = whoseTurn == "white"?"black": "white";

					this.setState(
							{ ChessBoard : board,

						event : "onSelect",

						whoseTurn : turn,

						currentCoin : {},

						currentMoves :[]
		 }
						);
				}

			}
		
	}

	render(){

		return(
			  <div>
				<div className="chessboard">

				{ this.state.ChessBoard.map((row,key) => <ChessBoardRow data= {row} key={key} event= {this.onSelect} /> )}
				</div>
				<div className="messageCard">
				 <h2> { this.state.whoseTurn }  Turn </h2>
				</div>


			</div>
			);
	}

}

class ChessBoardRow extends Component{

	render(){

			const style = <span> &#9817; </span>;
		return (
			<div >
		{ this.props.data.map((element) => <CoinBox data={ element} key={ element.id } event={this.props.event}/> )}
			</div>
		);
	}
}

class CoinBox extends Component{


	render(){
				let url = this.props.data.coinColor+this.props.data.coinType;
				
				let img;
				if(this.props.data.state == "occupied" )
				{
				 img = <img src={ "CHESS ICON/"+url+".png"}   />;
				}
				 if(this.props.data.state == "empty") {

						img = "";
					}


			if(this.props.data.state == "readyToMove")
			{
				img = <img src="http://www.clker.com/cliparts/z/l/v/A/K/R/green-circle-th.png" className="pathImage" />
			}

		return(
				<div className={this.props.data.tilesColor } onClick={() => this.props.event(this.props.data)} >
					{ img }
				</div>

		);
	}
}

export default ChessBoard;