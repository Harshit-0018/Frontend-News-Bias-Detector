import React, { useEffect, useMemo, useState } from 'react';
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
} from 'recharts';

const COLORS = ['#2563eb', '#7c3aed', '#10b981', '#f59e0b', '#ef4444'];

function History() {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/history/')
            .then((res) => res.json())
            .then((data) => {
                setHistory(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const biasData = useMemo(() => {
        const counts = {
            Left: 0,
            Center: 0,
            Right: 0,
        };

        history.forEach((item) => {
            if (counts[item.bias] !== undefined) {
                counts[item.bias] += 1;
            }
        });

        return Object.entries(counts).map(([name, value]) => ({
            name,
            value,
        }));
    }, [history]);

    const sentimentData = useMemo(() => {
        const counts = {
            Positive: 0,
            Neutral: 0,
            Negative: 0,
        };

        history.forEach((item) => {
            if (counts[item.sentiment] !== undefined) {
                counts[item.sentiment] += 1;
            }
        });

        return Object.entries(counts).map(([name, value]) => ({
            name,
            value,
        }));
    }, [history]);

    const handleDelete = async (id) => {
        const confirmed = window.confirm('Delete this history item?');
        if (!confirmed) return;

        try {
            await fetch(`http://127.0.0.1:8000/history/${id}`, {
                method: 'DELETE',
            });

            setHistory((prev) => prev.filter((item) => item.id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    const handleClearAll = async () => {
        const confirmed = window.confirm('Clear all history?');
        if (!confirmed) return;

        try {
            await fetch('http://127.0.0.1:8000/history/', {
                method: 'DELETE',
            });

            setHistory([]);
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) {
        return (
            <div style={{ padding: '60px', textAlign: 'center' }}>
                Loading history...
            </div>
        );
    }

    return (
        <div
            style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '48px 24px 80px',
            }}
        >
            <h1
                style={{
                    fontSize: '48px',
                    fontWeight: 800,
                    color: '#0f172a',
                    marginBottom: '12px',
                }}
            >
                Analysis History
            </h1>

            <p
                style={{
                    color: '#64748b',
                    fontSize: '18px',
                    marginBottom: '40px',
                }}
            >
                View previous analyses along with bias and sentiment statistics.
            </p>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '24px',
                    marginBottom: '48px',
                }}
            >
                <div
                    style={{
                        background: '#ffffff',
                        borderRadius: '24px',
                        padding: '24px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
                    }}
                >
                    <h2
                        style={{
                            fontSize: '22px',
                            marginBottom: '20px',
                            color: '#0f172a',
                        }}
                    >
                        Bias Distribution
                    </h2>

                    <div style={{ width: '100%', height: '280px' }}>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={biasData}
                                    dataKey="value"
                                    nameKey="name"
                                    outerRadius={90}
                                    label
                                >
                                    {biasData.map((entry, index) => (
                                        <Cell
                                            key={entry.name}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div
                    style={{
                        background: '#ffffff',
                        borderRadius: '24px',
                        padding: '24px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
                    }}
                >
                    <h2
                        style={{
                            fontSize: '22px',
                            marginBottom: '20px',
                            color: '#0f172a',
                        }}
                    >
                        Sentiment Distribution
                    </h2>

                    <div style={{ width: '100%', height: '280px' }}>
                        <ResponsiveContainer>
                            <BarChart data={sentimentData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis allowDecimals={false} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="value" fill="#2563eb" radius={[8, 8, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginBottom: '24px',
                }}
            >
                <button
                    onClick={handleClearAll}
                    style={{
                        background: '#ef4444',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '12px',
                        padding: '12px 18px',
                        fontSize: '14px',
                        fontWeight: 600,
                        cursor: 'pointer',
                    }}
                >
                    Clear All History
                </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {history.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            background: '#ffffff',
                            border: '1px solid #e2e8f0',
                            borderRadius: '24px',
                            padding: '24px',
                            boxShadow: '0 8px 20px rgba(15, 23, 42, 0.04)',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                marginBottom: '16px',
                                gap: '16px',
                            }}
                        >
                            <div>
                                <div
                                    style={{
                                        fontSize: '12px',
                                        fontWeight: 700,
                                        color: '#2563eb',
                                        textTransform: 'uppercase',
                                        marginBottom: '8px',
                                    }}
                                >
                                    {item.type}
                                </div>

                                <div
                                    style={{
                                        fontSize: '16px',
                                        color: '#0f172a',
                                        lineHeight: 1.7,
                                    }}
                                >
                                    {item.input}
                                </div>
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    gap: '12px',
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: '13px',
                                        color: '#64748b',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {new Date(item.created_at).toLocaleString()}
                                </div>

                                <button
                                    onClick={() => handleDelete(item.id)}
                                    style={{
                                        background: '#fee2e2',
                                        color: '#dc2626',
                                        border: 'none',
                                        borderRadius: '10px',
                                        padding: '8px 14px',
                                        fontSize: '13px',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                gap: '16px',
                                flexWrap: 'wrap',
                            }}
                        >
                            <div
                                style={{
                                    padding: '10px 16px',
                                    borderRadius: '999px',
                                    background: '#eff6ff',
                                    color: '#2563eb',
                                    fontWeight: 600,
                                }}
                            >
                                Bias: {item.bias}
                            </div>

                            <div
                                style={{
                                    padding: '10px 16px',
                                    borderRadius: '999px',
                                    background: '#f5f3ff',
                                    color: '#7c3aed',
                                    fontWeight: 600,
                                }}
                            >
                                Confidence: {Math.round(item.confidence * 100)}%
                            </div>

                            <div
                                style={{
                                    padding: '10px 16px',
                                    borderRadius: '999px',
                                    background: '#ecfdf5',
                                    color: '#10b981',
                                    fontWeight: 600,
                                }}
                            >
                                Sentiment: {item.sentiment}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default History;