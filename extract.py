import re
import os
import shutil

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

os.makedirs('assets/css', exist_ok=True)
os.makedirs('assets/js', exist_ok=True)

style_match = re.search(r'(?s)<style>(.*?)</style>', content)
if style_match:
    with open('assets/css/style.css', 'w', encoding='utf-8') as f:
        f.write(style_match.group(1).strip())

script_match = re.search(r'(?s)<script>(.*?)</script>', content)
if script_match:
    with open('assets/js/app.js', 'w', encoding='utf-8') as f:
        f.write(script_match.group(1).strip())

if os.path.exists('icons.js'):
    shutil.move('icons.js', 'assets/js/icons.js')

new_content = re.sub(r'(?s)<style>.*?</style>', '<link rel="stylesheet" href="assets/css/style.css">', content)
new_content = re.sub(r'(?s)<script>.*?</script>', '<script src="assets/js/app.js"></script>', new_content)
new_content = re.sub(r'icons\.js\?v=\d+', 'assets/js/icons.js', new_content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Extraction Done')
