import React from 'react';
import { useHistory, useParams } from 'react-router';

const Detail = (props) => {
	let history = useHistory();
	let { id } = useParams();
  return (
    <div className="container">
      <div className="row">
			<div className="col-md-6">
				<img src={"http://yuminc03.dothome.co.kr/image/img" + (props.id) + ".jpg"} width="80%" alt="" title=""/>
			</div>
			<div className="col-md-6 mt-4">
				<h4 className="pt-5">{props.cdata[id].title}</h4>
				<p>{props.cdata[id].content}</p>
				<p>{props.cdata[id].price}</p>
				<button className="btn btn-danger">주문하기</button>&nbsp;&nbsp;&nbsp;
				<button className="btn btn-info" onClick={() => {history.push('/')}}>뒤로가기</button>
			</div>
		</div>
    </div>
  );
};

export default Detail;