function InstagramFeed() {
  return (
    <section className="instagram-feed">
      <h2>Instagram Feed</h2>
      <p>Latest posts from our Instagram</p>
      {/* Replace with real embed later */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <div style={{ width: '150px', height: '150px', background: '#ddd' }}></div>
        <div style={{ width: '150px', height: '150px', background: '#ccc' }}></div>
        <div style={{ width: '150px', height: '150px', background: '#bbb' }}></div>
        <div style={{ width: '150px', height: '150px', background: '#aaa' }}></div>
      </div>
    </section>
  );
}

export default InstagramFeed;
