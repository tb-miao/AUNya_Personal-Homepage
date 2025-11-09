const officialSites = ["https://lab.tbmiao.dpdns.org"];
			// 域名检测功能
			function checkDomain() {
				try {
					// 获取当前访问的完整URL
					const currentUrl = window.location.href;
					// 获取当前域名
					const currentDomain = window.location.hostname;
					// 获取所有官方域名
					const officialDomains = officialSites.map(site => {
						try {
							return new URL(site).hostname;
						} catch (e) {
							return null;
						}
					}).filter(domain => domain !== null);
					
					// 检查当前域名是否为官方域名或本地开发环境
					const isOfficialDomain = officialDomains.includes(currentDomain);
					const isLocalDev = currentDomain === 'localhost' || currentDomain === '127.0.0.1';
					
					// 如果当前域名不是官方域名且不是本地开发环境
					if (!isOfficialDomain && !isLocalDev) {
						// 创建警告弹窗
						const shouldRedirect = confirm(
							`⚠️ 域名安全警告\n\n` +
							`您当前访问的域名：${currentDomain}\n` +
							`官方域名：${officialDomains.join(', ')}\n\n` +
							`您可能正在访问非官方网站，存在安全风险！\n\n` +
							`点击"确定"跳转到官方网站\n` +
							`点击"取消"继续访问当前网站（不推荐）`
						);
						
						// 如果用户选择跳转到官方网站
						if (shouldRedirect) {
							// 构建官方网站的对应页面URL（使用第一个官方网站）
							const currentPath = window.location.pathname + window.location.search + window.location.hash;
							const officialPageUrl = officialSites[0] + currentPath;
							// 跳转到官方网站
							window.location.href = officialPageUrl;
						}
					}
				} catch (error) {
					// 如果检测过程中出现错误，静默处理，不影响正常访问
					console.warn('域名检测失败:', error);
				}
			}
			
			// 页面加载完成后执行域名检测
			if (document.readyState === 'loading') {
				document.addEventListener('DOMContentLoaded', checkDomain);
			} else {
				checkDomain();
			}