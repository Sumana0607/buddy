import {
    View,
    Text,
    TouchableOpacity,
    useColorScheme,
    Alert,
} from "react-native";
import React, { useState } from "react";

import * as DocumentPicker from "expo-document-picker";
import { Colors } from "@/constants/Colors";

export default function FileUpload() {
    const [file, setFile] =
        useState<DocumentPicker.DocumentPickerResult | null>(null);
    const [uploading, setUploading] = useState(false);

    const colorScheme = useColorScheme();
    const themeColor = Colors[colorScheme ?? "light"];

    const pickDocument = async ({ maxSize = 10 }: { maxSize: number }) => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: "*/*",
                copyToCacheDirectory: true,
                multiple: false,
            });

            if (result.canceled) result;

            setFile(result);
        } catch (error) {
            Alert.alert("Error picking document.");
            console.error("Error picking document", error);
        }
    };

    console.log(file);

    return (
        <TouchableOpacity
            style={{ backgroundColor: themeColor.primary }}
            // onPress={pickDocument}
        >
            {/* <Text>
                {file !== null ? file.assets[0].name : "Select the Book"}
            </Text> */}
        </TouchableOpacity>
    );
}

// import React, { useState } from "react";
// import {
//     View,
//     Text,
//     Pressable,
//     StyleSheet,
//     ActivityIndicator,
//     Alert,
// } from "react-native";
// import * as DocumentPicker from "expo-document-picker";
// import * as FileSystem from "expo-file-system";
// import { Ionicons } from "@expo/vector-icons";
// import { Colors } from "@/constants/Colors";
// import { useColorScheme } from "react-native";

// interface FileUploadProps {
//     label: string;
//     onUploadSuccess?: (response: any) => void;
//     onUploadError?: (error: any) => void;
//     allowedTypes?: string[];
//     maxSize?: number; // in MB
// }

// const FileUpload: React.FC<FileUploadProps> = ({
//     label,
//     onUploadSuccess,
//     onUploadError,
//     allowedTypes = ["*/*"],
//     maxSize = 10, // 10MB default
// }) => {
//     const colorScheme = useColorScheme();
//     const themeColors = Colors[colorScheme ?? "light"];
//     const [file, setFile] =
//         useState<DocumentPicker.DocumentPickerResult | null>(null);
//     const [uploading, setUploading] = useState(false);
//     const [progress, setProgress] = useState(0);

//     const pickDocument = async () => {
//         try {
//             const result = await DocumentPicker.getDocumentAsync({
//                 type: allowedTypes,
//                 copyToCacheDirectory: false,
//             });

//             if (result.type === "success") {
//                 // Check file size
//                 const fileInfo = await FileSystem.getInfoAsync(result.uri);
//                 const fileSizeMB = fileInfo.size
//                     ? fileInfo.size / (1024 * 1024)
//                     : 0;

//                 if (fileSizeMB > maxSize) {
//                     Alert.alert(
//                         "File too large",
//                         `Please select a file smaller than ${maxSize}MB`
//                     );
//                     return;
//                 }

//                 setFile(result);
//             }
//         } catch (error) {
//             console.error("Error picking document:", error);
//             onUploadError?.(error);
//         }
//     };

//     const uploadFile = async () => {
//         if (!file || file.type !== "success") {
//             Alert.alert("No file selected", "Please select a file first");
//             return;
//         }

//         setUploading(true);
//         setProgress(0);

//         try {
//             const formData = new FormData();
//             formData.append("file", {
//                 uri: file.uri,
//                 name: file.name,
//                 type: file.mimeType || "application/octet-stream",
//             } as any);

//             const response = await FileSystem.uploadAsync(
//                 "http://your-nodejs-api.com/upload", // Replace with your API endpoint
//                 file.uri,
//                 {
//                     fieldName: "file",
//                     httpMethod: "POST",
//                     uploadType: FileSystem.FileSystemUploadType.MULTIPART,
//                     headers: {
//                         "Content-Type": "multipart/form-data",
//                     },
//                     onUploadProgress: ({
//                         totalBytesSent,
//                         totalBytesExpectedToSend,
//                     }) => {
//                         const calculatedProgress =
//                             totalBytesSent / totalBytesExpectedToSend;
//                         setProgress(calculatedProgress);
//                     },
//                 }
//             );

//             const result = JSON.parse(response.body);
//             onUploadSuccess?.(result);
//             Alert.alert("Success", "File uploaded successfully!");
//         } catch (error) {
//             console.error("Upload error:", error);
//             onUploadError?.(error);
//             Alert.alert("Error", "Failed to upload file");
//         } finally {
//             setUploading(false);
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={[styles.label, { color: themeColors.textPrimary }]}>
//                 {label}
//             </Text>

//             <Pressable
//                 style={[
//                     styles.uploadButton,
//                     {
//                         backgroundColor: themeColors.surface,
//                         borderColor: themeColors.border,
//                     },
//                 ]}
//                 onPress={pickDocument}
//                 disabled={uploading}
//             >
//                 <Ionicons
//                     name="cloud-upload-outline"
//                     size={24}
//                     color={themeColors.textPrimary}
//                 />
//                 <Text
//                     style={[
//                         styles.buttonText,
//                         { color: themeColors.textPrimary },
//                     ]}
//                 >
//                     {file?.type === "success" ? file.name : "Choose a file"}
//                 </Text>
//             </Pressable>

//             {file?.type === "success" && (
//                 <Pressable
//                     style={[
//                         styles.submitButton,
//                         { backgroundColor: themeColors.primary },
//                     ]}
//                     onPress={uploadFile}
//                     disabled={uploading}
//                 >
//                     {uploading ? (
//                         <>
//                             <ActivityIndicator color={themeColors.surface} />
//                             <Text
//                                 style={[
//                                     styles.submitText,
//                                     { color: themeColors.surface },
//                                 ]}
//                             >
//                                 Uploading... {Math.round(progress * 100)}%
//                             </Text>
//                         </>
//                     ) : (
//                         <Text
//                             style={[
//                                 styles.submitText,
//                                 { color: themeColors.surface },
//                             ]}
//                         >
//                             Upload File
//                         </Text>
//                     )}
//                 </Pressable>
//             )}

//             {file?.type === "success" && (
//                 <View style={styles.fileInfo}>
//                     <Text style={{ color: themeColors.textSecondary }}>
//                         {file.mimeType} • {Math.round((file.size || 0) / 1024)}{" "}
//                         KB
//                     </Text>
//                 </View>
//             )}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         marginBottom: 20,
//         width: "100%",
//     },
//     label: {
//         fontSize: 16,
//         marginBottom: 8,
//         fontFamily: "Poppins-Medium",
//     },
//     uploadButton: {
//         flexDirection: "row",
//         alignItems: "center",
//         padding: 15,
//         borderRadius: 10,
//         borderWidth: 1,
//     },
//     buttonText: {
//         marginLeft: 10,
//         flexShrink: 1,
//     },
//     submitButton: {
//         marginTop: 10,
//         padding: 15,
//         borderRadius: 10,
//         alignItems: "center",
//         flexDirection: "row",
//         justifyContent: "center",
//         gap: 10,
//     },
//     submitText: {
//         fontSize: 16,
//     },
//     fileInfo: {
//         marginTop: 5,
//         paddingHorizontal: 5,
//     },
// });

// export default FileUpload;
