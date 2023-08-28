import {PrettyChatWindow} from'react-chat-engine-pretty';

const ChatsPage= (props) =>{
return (
    <div style={{height:'100vh'}} >
        <PrettyChatWindow
        projectId='0851ec4f-3f17-42fe-b540-3dee445896b8'
        username={ props.user.username}
        secret={props.user.secret}
        style={{height:'100%'}}
        />
    </div>
)
}
   

export default ChatsPage