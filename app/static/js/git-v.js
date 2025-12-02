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
      let allCommitsInfo = '';
      
      // 显示最近的10条提交信息
      const commitsToShow = data.slice(0, 10);
      
      commitsToShow.forEach(commit => {
        const commitDate = new Date(commit.commit.author.date);
        const formattedDate = commitDate.toLocaleString('zh-CN', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        });
        
        const commitMessage = commit.commit.message;
        const commitUrl = commit.html_url;
        const commitSha = commit.sha.substring(0, 7);
        const authorName = commit.commit.author.name;
        
        const commitInfo = `
              <h3 style='color: #013cffff'><b>##### ${formattedDate}</b> - 
              <a href='${commitUrl}' target='_blank'  style='color: #013cffff'>${commitSha}</a></h3>
              <b style='color: #cc01ffff'>${commitMessage}</b><br>
        `;
        
        allCommitsInfo += commitInfo;
      });
      
      gitInfoElement.innerHTML = allCommitsInfo;
    })
    .catch(error => {
      console.error('获取GitHub提交信息失败:', error);
      gitInfoElement.innerHTML = '<p>无法获取更新信息</p>';
    });
    console.log('JS加载成功')
});
