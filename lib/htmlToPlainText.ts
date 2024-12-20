export function htmlToPlainText(html: string): string {
  // 簡単なHTMLタグの除去
  const withoutTags = html.replace(/<[^>]*>/g, '');
  
  // HTMLエンティティのデコード
  const decoded = withoutTags.replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
  
  return decoded.trim();
}

