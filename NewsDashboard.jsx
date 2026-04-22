import React, { useEffect, useState } from 'react';

function NewsDashboard() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/news')
            .then((res) => res.json())
            .then((data) => {
                setArticles(data.articles || []);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <div
            style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '48px 24px',
            }}
        >
            <h1
                style={{
                    fontSize: '42px',
                    fontWeight: 700,
                    color: '#0f172a',
                    marginBottom: '12px',
                }}
            >
                Daily India News
            </h1>

            <p
                style={{
                    color: '#64748b',
                    marginBottom: '36px',
                }}
            >
                Latest headlines updated every day.
            </p>

            {loading ? (
                <p>Loading latest news...</p>
            ) : (
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '24px',
                    }}
                >
                    {articles.map((article, index) => (
                        <div
                            key={index}
                            style={{
                                background: '#fff',
                                border: '1px solid #e2e8f0',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(15,23,42,0.06)',
                            }}
                        >
                            {article.urlToImage && (
                                <img
                                    src={article.urlToImage}
                                    alt={article.title}
                                    style={{
                                        width: '100%',
                                        height: '220px',
                                        objectFit: 'cover',
                                    }}
                                />
                            )}

                            <div style={{ padding: '20px' }}>
                                <h3
                                    style={{
                                        fontSize: '20px',
                                        color: '#0f172a',
                                        marginBottom: '12px',
                                        lineHeight: 1.4,
                                    }}
                                >
                                    {article.title}
                                </h3>

                                <p
                                    style={{
                                        color: '#64748b',
                                        lineHeight: 1.6,
                                        marginBottom: '16px',
                                    }}
                                >
                                    {article.description}
                                </p>

                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        display: 'inline-block',
                                        padding: '10px 16px',
                                        background: '#2563eb',
                                        color: '#fff',
                                        borderRadius: '10px',
                                        textDecoration: 'none',
                                        fontWeight: 600,
                                    }}
                                >
                                    Read Full Article
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default NewsDashboard;