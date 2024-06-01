<?php
if (isset($_POST["submit"])) {
    $uploadDir = "uploads/"; // Directory where uploaded files will be stored
    $uploadedFile = $uploadDir . basename($_FILES["mp4file"]["name"]);

    // Check if the uploaded file is an MP4 file
    $fileType = strtolower(pathinfo($uploadedFile, PATHINFO_EXTENSION));
    if ($fileType === "mp4") {
        if (move_uploaded_file($_FILES["mp4file"]["tmp_name"], $uploadedFile)) {
            echo "File uploaded successfully.";
        } else {
            echo "Error uploading file.";
        }
    } else {
        echo "Please upload an MP4 file.";
    }
}
?>