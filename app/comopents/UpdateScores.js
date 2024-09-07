import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const UpdateScoresModal = ({ isOpen, onRequestClose, onSave, initialRank, initialPercentile, initialScore }) => {
  const [rank, setRank] = useState(initialRank || '');
  const [percentile, setPercentile] = useState(initialPercentile || '');
  const [currentScore, setCurrentScore] = useState(initialScore || '');

  useEffect(() => {
    setRank(initialRank);
    setPercentile(initialPercentile);
    setCurrentScore(initialScore);
  }, [initialRank, initialPercentile, initialScore]);

  const handleSave = () => {
    onSave(rank, percentile, currentScore); // Pass updated values
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          maxWidth: '400px',
          margin: 'auto',
          borderRadius: '8px',
          padding: '20px',
        },
      }}
    >
      <h2 style={{ textAlign: 'center' }}>Update scores</h2>
      <form>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="rank" style={{ display: 'block', marginBottom: '5px' }}>1. Update your Rank</label>
          <input
            id="rank"
            type="number"
            value={rank}
            onChange={(e) => setRank(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="percentile" style={{ display: 'block', marginBottom: '5px' }}>2. Update your Percentile</label>
          <input
            id="percentile"
            type="number"
            min="0"
            max="100"
            value={percentile}
            onChange={(e) => setPercentile(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="currentScore" style={{ display: 'block', marginBottom: '5px' }}>3. Update your Current Score (out of 15)</label>
          <input
            id="currentScore"
            type="number"
            min="0"
            max="15"
            value={currentScore}
            onChange={(e) => setCurrentScore(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <button
            type="button"
            onClick={onRequestClose}
            style={{ padding: '10px 20px', border: 'none', backgroundColor: '#ccc', borderRadius: '4px', cursor: 'pointer' }}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            style={{ padding: '10px 20px', border: 'none', backgroundColor: '#1d4ed8', color: '#fff', borderRadius: '4px', cursor: 'pointer' }}
          >
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UpdateScoresModal;
