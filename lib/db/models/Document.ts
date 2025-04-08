import db from '../index';

export const saveDocument = (userId: number, fileName: string, filePath: string) => {
  const stmt = db.prepare(
    'INSERT INTO documents (user_id, file_name, file_path) VALUES (?, ?, ?)'
  );
  return stmt.run(userId, fileName, filePath);
};

export const getUserDocuments = (userId: number) => {
  return db.prepare('SELECT * FROM documents WHERE user_id = ?').all(userId);
};