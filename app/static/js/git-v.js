// 显示git信息
document.addEventListener('DOMContentLoaded', function() {
  const gitInfoElement = document.getElementById('git-info');
  
  if (!gitInfoElement) return;

  fetch('https://api.github.com/repos/tb-miao/AUNya_Personal-Homepage/commits')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const commit = data[0];
      const commitDate = new Date(commit.commit.author.date);
      const formattedDate = commitDate.toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
      
      const commitMessage = commit.commit.message;
      const commitAuthor = commit.commit.author.name;
      const commitUrl = commit.html_url;
      const commitSha = commit.sha.substring(0, 7);
      
      const commitInfo = `
        <p>最后更新：
          <strong><span class='date'>${formattedDate}</span></strong>，
          <strong><a href='${commitUrl}' target='_blank'>${commitSha}</a></strong>，<br>
          - <b>${commitMessage}</b>
        </p>
      `;
      
      gitInfoElement.innerHTML = commitInfo;
    })
    .catch(error => {
      console.error('获取GitHub提交信息失败:', error);
      gitInfoElement.innerHTML = '<p>无法获取最新更新信息</p>';
    });
});
