import React from 'react';

import ViewList from "./ViewList";

export default function Assignments() {
    return (
        <div>
            <ViewList assignmentStatus={false} checkType="NotComplete" />
        </div>
    );
}

