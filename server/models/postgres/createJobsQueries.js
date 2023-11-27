const queryText = `
        CREATE TABLE IF NOT EXISTS job_opportunities (
            id SERIAL PRIMARY KEY,
            business_id INTEGER NOT NULL,
            review_id INTEGER NOT NULL,
            title VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            surburb VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            job_type VARCHAR(50),
            salary_min INTEGER,
            salary_max INTEGER,
            contact_email VARCHAR(255) NOT NULL,
            contact_phone VARCHAR(255) NOT NULL,
            date_posted TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            date_updated TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            status VARCHAR(50) DEFAULT 'active',
            FOREIGN KEY (business_id) REFERENCES businesses(id)
            FOREIGN KEY (review_id) REFERENCES reviews(id)
        );
    `;
