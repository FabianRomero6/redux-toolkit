import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const REACTION_EMOJI = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕'
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  return(
    <div>
      {Object.entries(REACTION_EMOJI).map(([name, emoji]) => (
        <button
          key={name}
          type="button"
          className="reactionButton"
          onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name}))}
        >
          {emoji} {post.reactions[name]}
        </button>
      ))}
    </div>
  );
};

export default ReactionButtons;