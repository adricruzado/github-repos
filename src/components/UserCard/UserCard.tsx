import { UserDetails } from "../../services/types";
import UserCardStyled from "./UserCardStyled";

interface UserCardProps {
  userDetails: UserDetails | null;
}

const UserCard = ({
  userDetails,
}: UserCardProps): React.ReactElement | null => {
  return userDetails ? (
    <UserCardStyled>
      <img
        className="user-card__avatar"
        src={userDetails?.avatar_url}
        alt={userDetails?.name}
      />
      <h2 className="user-card__name">{userDetails?.name}</h2>
      <span className="user-card__username">{userDetails?.login}</span>
      <p className="user-card__description">{userDetails?.bio}</p>
    </UserCardStyled>
  ) : null;
};

export default UserCard;
