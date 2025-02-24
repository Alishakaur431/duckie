document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-name");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");
    const goalCount = document.getElementById("goal-count");
    const scoreElement = document.getElementById("score");
    const levelElement = document.getElementById("level");
    const pointsPopup = document.getElementById("points-popup");
    const levelUpPopup = document.getElementById("level-up-popup");
    
    let totalTasks = 0;
    let totalPoints = 0;
    let level = 1;
    const pointsToLevelUp = 25; // Adjust this value to change level-up frequency

    const emojis = {
        "drink water": "💧",
        "brush teeth": "🪥",
        "read a book": "📖",
        "exercise": "🏋️",
        "meditate": "🧘",
    };

    // Update goal count
    const updateGoalCount = () => {
        goalCount.textContent = `${totalTasks} goals left for today`;
    };

    // Show points popup
    const showPointsPopup = () => {
        pointsPopup.classList.add("show");
        setTimeout(() => {
            pointsPopup.classList.remove("show");
        }, 1000);
    };

    // Show Level-Up animation
    const showLevelUpPopup = () => {
        levelUpPopup.classList.add("show");
        setTimeout(() => {
            levelUpPopup.classList.remove("show");
        }, 2000);
    };

    // Check for level up
    const checkLevelUp = () => {
        if (totalPoints % pointsToLevelUp === 0) {
            level++;
            levelElement.textContent = `Level: ${level}`;
            showLevelUpPopup();
        }
    };

    // Add task
    const addTask = () => {
        const taskName = taskInput.value.trim().toLowerCase();
        if (!taskName) return;

        const emoji = emojis[taskName] || "✅";

        // Create task element
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");

        const taskDetails = document.createElement("div");
        taskDetails.classList.add("task-name");
        taskDetails.innerHTML = `<span>${emoji}</span> ${taskName}`;

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.addEventListener("click", () => {
            taskItem.classList.add("task-completed");
            taskList.removeChild(taskItem);
            totalTasks--;
            totalPoints += 5;

            scoreElement.textContent = `Total Points: ${totalPoints}`;
            updateGoalCount();
            showPointsPopup();
            checkLevelUp();
        });

        taskItem.appendChild(taskDetails);
        taskItem.appendChild(completeButton);
        taskList.appendChild(taskItem);

        // Clear input and update counts
        taskInput.value = "";
        totalTasks++;
        updateGoalCount();
    };

    // Event listener for adding tasks
    addTaskButton.addEventListener("click", addTask);
});
