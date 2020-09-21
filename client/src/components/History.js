import React from 'react';

import ViewList from "./ViewList";

export default function History() {
    return (
        <div>
            <ViewList assignmentStatus={true} checkType="Complete" />
        </div>
    );
}