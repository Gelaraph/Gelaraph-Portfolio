import './githubActivity.css';
import GitHubCalendar from 'react-github-calendar';

const GithubActivity = () => {
  return (
    <div className="githbubContainer">
      <GitHubCalendar
        username="gelaraph"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
      />
    </div>
  );
};

export default GithubActivity;
