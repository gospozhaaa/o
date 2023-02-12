import './AddPostForm.css'
import { Component } from "react";
export class AddPostForm extends Component  {
    state = {
        postTitle: '',
        postDescriprion: ''
    }

createPost = () =>{
    const post = {
        id: this.props.blogArr.lebght +1,
        title: this.state.postTitle,
        description: this.state.postDescriprion,
        liked: false
    }
    this.props.addNew
}
render(){

    return(
        <>
        <div className='overlay'>
            <div className="addFormDiv">
                <div className = 'modalForm' >
                    <hl class = 'headerModalForm'> Сщздание поста</hl>
                    <input
                    type="text"
                    placeholder="Заголовок поста"
                    name="email"
                    className="placeholderForm1"
                    value = {}
                    onChange = {}
                   required
                   />
                   <input
                   type="text"
                   placeholder="ЕУЛЫЕ поста"
                   name="пароль"
                   className="placeholderForm2"
                   value = {}
                   onChange = {}
                  required
                  />
                 <button className="submit"  type="submit" onClick = {}>Добавить</button>
                </div>
            </div>
        </div>
        </>
    )
}
}
handlePostTitleChange = (e) =>
    this.setState({
        postTitle: e.target.value
    })
        handlePostDescriptionChange = (e) =>{
            this.setState({
                postTitle: e.target.value
    })
}