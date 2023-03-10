import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap' 
import {Link} from 'react-router-dom'
import CommentButton from './CommentButtonComponent'
import {Loading} from './LoadingComponent'
import { baseUrl } from '../shared/baseUrl';



    function RenderDish({dish}) {
        return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
    }

    function RenderComments({comments, postComment, dishId}) {
        return (
            <div className="col-12 col-md-5 m-1">
                <h2 className="mb-3">Comentários</h2>
                {comments.map((comment) => {
                return (<><p>{comment.comment}</p><p>-- {comment.author}, {comment.date.substr(8, 2)}-{comment.date.substr(5, 2)}-{comment.date.substr(0, 4)}</p></>)
            })}
                <CommentButton postComment={postComment} dishId={dishId} />
            </div>
        )
    }


const DishDetail = (props) => {

    if (props.isLoading) {
        return (
            <div className='container'>
                <div className='row'>
                    <Loading />
                </div>
            </div>
        )
    } else if (props.errMess) {
        return (
            <div className='container'>
                <div className='row'>
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        )     
    } else if (props.dish != null) {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} postComment={props.postComment} dishId={props.dish.id} />
                </div>
            </div>)
    } else {
        return (
            <div></div>
        )
    }
}




export default DishDetail;