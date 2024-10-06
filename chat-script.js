document.getElementById('sendButton').addEventListener('click', function () {
    const userInput = document.getElementById('userInput').value;
    const messagesContainer = document.querySelector('.messages');

    // Display user message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.textContent = userInput;
    messagesContainer.appendChild(userMessage);

    // Process user input
    const botResponse = getBotResponse(userInput);

    // Display bot response
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot';
    botMessage.innerHTML = botResponse; // Using innerHTML to allow for formatted content
    messagesContainer.appendChild(botMessage);

    // Clear input
    document.getElementById('userInput').value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
});

// Function to get bot response based on user input
function getBotResponse(input) {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("star health diabetes safe insurance policy")) {
        return getStarHealthDiabetesInfo();
    } else if (lowerInput.includes("religare care health insurance")) {
        return getReligareCareInfo();
    } else if (lowerInput.includes("compare star health and religare care")) {
        return compareStarHealthAndReligare();
    } else {
        return "I'm sorry I am under maintainance";
    }
}

// Function to get detailed information about Star Health Diabetes Safe Insurance Policy
function getStarHealthDiabetesInfo() {
    return `
        <div>
            <h3>Star Health Diabetes Safe Insurance Policy</h3>
            <p><strong>Overview:</strong> This policy is specifically designed for individuals with diabetes. It offers extensive coverage for hospitalization and treatment.</p>
            <h4>Merits:</h4>
            <ul>
                <li>Coverage for pre-existing diabetes-related complications.</li>
                <li>Annual health check-ups included.</li>
                <li>Cashless hospitalization across network hospitals.</li>
            </ul>
            <h4>Demerits:</h4>
            <ul>
                <li>Higher premium costs due to specific coverage.</li>
                <li>May have sub-limits on certain treatments.</li>
            </ul>
            <h4>Coverage Details:</h4>
            <table border="1">
                <tr>
                    <th>Coverage</th>
                    <th>Details</th>
                </tr>
                <tr>
                    <td>Sum Insured</td>
                    <td>Up to ₹1 Crore</td>
                </tr>
                <tr>
                    <td>Age Limit</td>
                    <td>Coverage available for individuals aged 18 to 65</td>
                </tr>
                <tr>
                    <td>Waiting Period</td>
                    <td>30 days for accidents, 1-4 years for pre-existing diseases</td>
                </tr>
            </table>
        </div>
    `;
}

// Function to get detailed information about Religare Care Health Insurance
function getReligareCareInfo() {
    return `
        <div>
            <h3>Religare Care Health Insurance</h3>
            <p><strong>Overview:</strong> A comprehensive health insurance plan providing coverage for various medical needs.</p>
            <h4>Merits:</h4>
            <ul>
                <li>High sum insured options available.</li>
                <li>No room rent capping.</li>
                <li>Free health check-ups and preventive care benefits.</li>
            </ul>
            <h4>Demerits:</h4>
            <ul>
                <li>May not cover specific critical illnesses.</li>
                <li>Higher premium for comprehensive coverage.</li>
            </ul>
            <h4>Coverage Details:</h4>
            <table border="1">
                <tr>
                    <th>Coverage</th>
                    <th>Details</th>
                </tr>
                <tr>
                    <td>Sum Insured</td>
                    <td>Up to ₹6 Crore</td>
                </tr>
                <tr>
                    <td>Age Limit</td>
                    <td>No age limit for enrollment</td>
                </tr>
                <tr>
                    <td>Waiting Period</td>
                    <td>30 days for accidents, specific waiting period for pre-existing conditions</td>
                </tr>
            </table>
        </div>
    `;
}

// Function to compare Star Health and Religare Care
function compareStarHealthAndReligare() {
    return `
        <div>
            <h3>Comparison: Star Health vs. Religare Care</h3>
            <table border="1">
                <tr>
                    <th>Feature</th>
                    <th>Star Health Diabetes Safe</th>
                    <th>Religare Care</th>
                </tr>
                <tr>
                    <td>Specialization</td>
                    <td>Diabetes-related coverage</td>
                    <td>General health coverage</td>
                </tr>
                <tr>
                    <td>Sum Insured</td>
                    <td>Up to ₹1 Crore</td>
                    <td>Up to ₹6 Crore</td>
                </tr>
                <tr>
                    <td>Age Limit</td>
                    <td>18-65 years</td>
                    <td>No age limit</td>
                </tr>
                <tr>
                    <td>Waiting Period</td>
                    <td>1-4 years for pre-existing diseases</td>
                    <td>30 days for accidents</td>
                </tr>
                <tr>
                    <td>Annual Check-ups</td>
                    <td>Yes</td>
                    <td>Yes</td>
                </tr>
            </table>
        </div>
    `;
}
