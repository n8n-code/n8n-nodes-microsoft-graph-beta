import type { INodeProperties } from 'n8n-workflow';

export const educationActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					]
				}
			},
			"options": [
				{
					"name": "Education Classes Education Class Assignments Education Assignment Publish",
					"value": "Education Classes Education Class Assignments Education Assignment Publish",
					"action": "Invoke action publish",
					"description": "Change the state of an educationAssignment from its original `draft` status to the `published` status.  You can change the state from `draft` to `scheduled` if the **assignment** is scheduled for a future date.  Only a teacher in the class can make this call. When an **assignment** is in draft status, students will not see the **assignment**, nor will there be any submission objects. When you call this API, educationSubmission objects are created and the assignment appears in the student's list. The state of the **assignment** goes back to `draft` if there is any backend failure during publish process. To update the properties of a published **assignment**, see update an assignment. To update the properties of a published assignment, see update an assignment.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/microsoft.graph.publish"
						}
					}
				},
				{
					"name": "Education Classes Education Class Assignments Education Assignment Set Up Feedback Resources Folder",
					"value": "Education Classes Education Class Assignments Education Assignment Set Up Feedback Resources Folder",
					"action": "Invoke action setUpFeedbackResourcesFolder",
					"description": "Create a SharePoint folder to upload feedback files for a given educationSubmission. Only teachers can perform this operation. The teacher determines the resources to upload in the feedback resources folder of a submission.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/microsoft.graph.setUpFeedbackResourcesFolder"
						}
					}
				},
				{
					"name": "Education Classes Education Class Assignments Education Assignment Set Up Resources Folder",
					"value": "Education Classes Education Class Assignments Education Assignment Set Up Resources Folder",
					"action": "Invoke action setUpResourcesFolder",
					"description": "Create a SharePoint folder to upload files for a given educationAssignment. Only teachers can perform this operation. The teacher determines the resources to upload in the assignment's folder.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/microsoft.graph.setUpResourcesFolder"
						}
					}
				},
				{
					"name": "Education Classes Education Class Assignments Education Assignment Submissions Education Submission Reassign",
					"value": "Education Classes Education Class Assignments Education Assignment Submissions Education Submission Reassign",
					"action": "Invoke action reassign",
					"description": "Reassign the submission to the student with feedback for review. Only teachers can perform this action.  Include the `Prefer: include-unknown-enum-members` header when you call this method; otherwise, a reassigned submission will be treated as a returned submission. This means that the `reassigned` status will be mapped to the `returned` status, and **reassignedDateTime** and **reassignedBy** properties will be mapped to **returnedDateTime** and **returnedBy** respectively. If the header `Prefer: include-unknown-enum-members` is provided, a reassigned submission retains the `reassigned` status. For details, see the examples section.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/microsoft.graph.reassign"
						}
					}
				},
				{
					"name": "Education Classes Education Class Assignments Education Assignment Submissions Education Submission Return",
					"value": "Education Classes Education Class Assignments Education Assignment Submissions Education Submission Return",
					"action": "Invoke action return",
					"description": "Make the grade and feedback associated with this submission available to the student. This will change the status of the submission from 'submitted' to 'returned' and indicates that feedback is provided or grading is done. This action can only be done by the teacher.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/microsoft.graph.return"
						}
					}
				},
				{
					"name": "Education Classes Education Class Assignments Education Assignment Submissions Education Submission Set Up Resources Folder",
					"value": "Education Classes Education Class Assignments Education Assignment Submissions Education Submission Set Up Resources Folder",
					"action": "Invoke action setUpResourcesFolder",
					"description": "Trigger the creation of the SharePoint resource folder where all file-based resources (Word, Excel, and so on) should be uploaded for a given submission. Only teachers and students can perform this operation. Note that files must be located in this folder in order to be added as resources. Only a student in the class can determine what files to upload in a given submission-level resource folder. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/microsoft.graph.setUpResourcesFolder"
						}
					}
				},
				{
					"name": "Education Classes Education Class Assignments Education Assignment Submissions Education Submission Submit",
					"value": "Education Classes Education Class Assignments Education Assignment Submissions Education Submission Submit",
					"action": "Invoke action submit",
					"description": "Indicate that a student is done with the work and is ready to hand in the assignment. Only teachers, students, and applications with application permissions can perform this operation. This method changes the status of the submission from `working` to `submitted`. During the submit process, all the resources are copied to the **submittedResources** bucket. The teacher will be looking at the submitted resources list for grading. A teacher can also submit a student's assignment on their behalf.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/microsoft.graph.submit"
						}
					}
				},
				{
					"name": "Education Classes Education Class Assignments Education Assignment Submissions Education Submission Unsubmit",
					"value": "Education Classes Education Class Assignments Education Assignment Submissions Education Submission Unsubmit",
					"action": "Invoke action unsubmit",
					"description": "Indicate that a student wants to work on the submitted assignment after it was turned in. Only teachers, students, and applications with application permissions can perform this operation. This method changes the status of the submission from `submitted` to `working`. During the submit process, all the resources are copied from **submittedResources** to  **workingResources**. The teacher will be looking at the working resources list for grading. A teacher can also unsubmit a student's assignment on their behalf.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/classes/{{$parameter[\"educationClass-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/microsoft.graph.unsubmit"
						}
					}
				},
				{
					"name": "Education Me Assignments Education Assignment Publish",
					"value": "Education Me Assignments Education Assignment Publish",
					"action": "Invoke action publish",
					"description": "Change the state of an educationAssignment from its original `draft` status to the `published` status.  You can change the state from `draft` to `scheduled` if the **assignment** is scheduled for a future date.  Only a teacher in the class can make this call. When an **assignment** is in draft status, students will not see the **assignment**, nor will there be any submission objects. When you call this API, educationSubmission objects are created and the assignment appears in the student's list. The state of the **assignment** goes back to `draft` if there is any backend failure during publish process. To update the properties of a published **assignment**, see update an assignment. To update the properties of a published assignment, see update an assignment.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/microsoft.graph.publish"
						}
					}
				},
				{
					"name": "Education Me Assignments Education Assignment Set Up Feedback Resources Folder",
					"value": "Education Me Assignments Education Assignment Set Up Feedback Resources Folder",
					"action": "Invoke action setUpFeedbackResourcesFolder",
					"description": "Create a SharePoint folder to upload feedback files for a given educationSubmission. Only teachers can perform this operation. The teacher determines the resources to upload in the feedback resources folder of a submission.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/microsoft.graph.setUpFeedbackResourcesFolder"
						}
					}
				},
				{
					"name": "Education Me Assignments Education Assignment Set Up Resources Folder",
					"value": "Education Me Assignments Education Assignment Set Up Resources Folder",
					"action": "Invoke action setUpResourcesFolder",
					"description": "Create a SharePoint folder to upload files for a given educationAssignment. Only teachers can perform this operation. The teacher determines the resources to upload in the assignment's folder.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/microsoft.graph.setUpResourcesFolder"
						}
					}
				},
				{
					"name": "Education Me Assignments Education Assignment Submissions Education Submission Reassign",
					"value": "Education Me Assignments Education Assignment Submissions Education Submission Reassign",
					"action": "Invoke action reassign",
					"description": "Reassign the submission to the student with feedback for review. Only teachers can perform this action.  Include the `Prefer: include-unknown-enum-members` header when you call this method; otherwise, a reassigned submission will be treated as a returned submission. This means that the `reassigned` status will be mapped to the `returned` status, and **reassignedDateTime** and **reassignedBy** properties will be mapped to **returnedDateTime** and **returnedBy** respectively. If the header `Prefer: include-unknown-enum-members` is provided, a reassigned submission retains the `reassigned` status. For details, see the examples section.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/microsoft.graph.reassign"
						}
					}
				},
				{
					"name": "Education Me Assignments Education Assignment Submissions Education Submission Return",
					"value": "Education Me Assignments Education Assignment Submissions Education Submission Return",
					"action": "Invoke action return",
					"description": "Make the grade and feedback associated with this submission available to the student. This will change the status of the submission from 'submitted' to 'returned' and indicates that feedback is provided or grading is done. This action can only be done by the teacher.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/microsoft.graph.return"
						}
					}
				},
				{
					"name": "Education Me Assignments Education Assignment Submissions Education Submission Set Up Resources Folder",
					"value": "Education Me Assignments Education Assignment Submissions Education Submission Set Up Resources Folder",
					"action": "Invoke action setUpResourcesFolder",
					"description": "Trigger the creation of the SharePoint resource folder where all file-based resources (Word, Excel, and so on) should be uploaded for a given submission. Only teachers and students can perform this operation. Note that files must be located in this folder in order to be added as resources. Only a student in the class can determine what files to upload in a given submission-level resource folder. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/microsoft.graph.setUpResourcesFolder"
						}
					}
				},
				{
					"name": "Education Me Assignments Education Assignment Submissions Education Submission Submit",
					"value": "Education Me Assignments Education Assignment Submissions Education Submission Submit",
					"action": "Invoke action submit",
					"description": "Indicate that a student is done with the work and is ready to hand in the assignment. Only teachers, students, and applications with application permissions can perform this operation. This method changes the status of the submission from `working` to `submitted`. During the submit process, all the resources are copied to the **submittedResources** bucket. The teacher will be looking at the submitted resources list for grading. A teacher can also submit a student's assignment on their behalf.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/microsoft.graph.submit"
						}
					}
				},
				{
					"name": "Education Me Assignments Education Assignment Submissions Education Submission Unsubmit",
					"value": "Education Me Assignments Education Assignment Submissions Education Submission Unsubmit",
					"action": "Invoke action unsubmit",
					"description": "Indicate that a student wants to work on the submitted assignment after it was turned in. Only teachers, students, and applications with application permissions can perform this operation. This method changes the status of the submission from `submitted` to `working`. During the submit process, all the resources are copied from **submittedResources** to  **workingResources**. The teacher will be looking at the working resources list for grading. A teacher can also unsubmit a student's assignment on their behalf.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/me/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/microsoft.graph.unsubmit"
						}
					}
				},
				{
					"name": "Education Synchronization Profiles Education Synchronization Profile Pause",
					"value": "Education Synchronization Profiles Education Synchronization Profile Pause",
					"action": "Invoke action pause",
					"description": "Pause the sync of a specific school data synchronization profile in the tenant.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/synchronizationProfiles/{{$parameter[\"educationSynchronizationProfile-id\"]}}/microsoft.graph.pause"
						}
					}
				},
				{
					"name": "Education Synchronization Profiles Education Synchronization Profile Reset",
					"value": "Education Synchronization Profiles Education Synchronization Profile Reset",
					"action": "Invoke action reset",
					"description": "Reset the sync of a specific school data synchronization profile in the tenant.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/synchronizationProfiles/{{$parameter[\"educationSynchronizationProfile-id\"]}}/microsoft.graph.reset"
						}
					}
				},
				{
					"name": "Education Synchronization Profiles Education Synchronization Profile Resume",
					"value": "Education Synchronization Profiles Education Synchronization Profile Resume",
					"action": "Invoke action resume",
					"description": "Resume the sync of a specific school data synchronization profile in the tenant.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/synchronizationProfiles/{{$parameter[\"educationSynchronizationProfile-id\"]}}/microsoft.graph.resume"
						}
					}
				},
				{
					"name": "Education Synchronization Profiles Education Synchronization Profile Start",
					"value": "Education Synchronization Profiles Education Synchronization Profile Start",
					"action": "Invoke action start",
					"description": "Verify the files uploaded to a specific school data synchronization profile in the tenant. If the verification is successful, synchronization will start on the profile. Otherwise, the response will contain errors and warnings. If the response contains errors, the synchronization will not start. If the response contains only warnings, synchronization will start.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/synchronizationProfiles/{{$parameter[\"educationSynchronizationProfile-id\"]}}/microsoft.graph.start"
						}
					}
				},
				{
					"name": "Education Users Education User Assignments Education Assignment Publish",
					"value": "Education Users Education User Assignments Education Assignment Publish",
					"action": "Invoke action publish",
					"description": "Change the state of an educationAssignment from its original `draft` status to the `published` status.  You can change the state from `draft` to `scheduled` if the **assignment** is scheduled for a future date.  Only a teacher in the class can make this call. When an **assignment** is in draft status, students will not see the **assignment**, nor will there be any submission objects. When you call this API, educationSubmission objects are created and the assignment appears in the student's list. The state of the **assignment** goes back to `draft` if there is any backend failure during publish process. To update the properties of a published **assignment**, see update an assignment. To update the properties of a published assignment, see update an assignment.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/microsoft.graph.publish"
						}
					}
				},
				{
					"name": "Education Users Education User Assignments Education Assignment Set Up Feedback Resources Folder",
					"value": "Education Users Education User Assignments Education Assignment Set Up Feedback Resources Folder",
					"action": "Invoke action setUpFeedbackResourcesFolder",
					"description": "Create a SharePoint folder to upload feedback files for a given educationSubmission. Only teachers can perform this operation. The teacher determines the resources to upload in the feedback resources folder of a submission.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/microsoft.graph.setUpFeedbackResourcesFolder"
						}
					}
				},
				{
					"name": "Education Users Education User Assignments Education Assignment Set Up Resources Folder",
					"value": "Education Users Education User Assignments Education Assignment Set Up Resources Folder",
					"action": "Invoke action setUpResourcesFolder",
					"description": "Create a SharePoint folder to upload files for a given educationAssignment. Only teachers can perform this operation. The teacher determines the resources to upload in the assignment's folder.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/microsoft.graph.setUpResourcesFolder"
						}
					}
				},
				{
					"name": "Education Users Education User Assignments Education Assignment Submissions Education Submission Reassign",
					"value": "Education Users Education User Assignments Education Assignment Submissions Education Submission Reassign",
					"action": "Invoke action reassign",
					"description": "Reassign the submission to the student with feedback for review. Only teachers can perform this action.  Include the `Prefer: include-unknown-enum-members` header when you call this method; otherwise, a reassigned submission will be treated as a returned submission. This means that the `reassigned` status will be mapped to the `returned` status, and **reassignedDateTime** and **reassignedBy** properties will be mapped to **returnedDateTime** and **returnedBy** respectively. If the header `Prefer: include-unknown-enum-members` is provided, a reassigned submission retains the `reassigned` status. For details, see the examples section.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/microsoft.graph.reassign"
						}
					}
				},
				{
					"name": "Education Users Education User Assignments Education Assignment Submissions Education Submission Return",
					"value": "Education Users Education User Assignments Education Assignment Submissions Education Submission Return",
					"action": "Invoke action return",
					"description": "Make the grade and feedback associated with this submission available to the student. This will change the status of the submission from 'submitted' to 'returned' and indicates that feedback is provided or grading is done. This action can only be done by the teacher.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/microsoft.graph.return"
						}
					}
				},
				{
					"name": "Education Users Education User Assignments Education Assignment Submissions Education Submission Set Up Resources Folder",
					"value": "Education Users Education User Assignments Education Assignment Submissions Education Submission Set Up Resources Folder",
					"action": "Invoke action setUpResourcesFolder",
					"description": "Trigger the creation of the SharePoint resource folder where all file-based resources (Word, Excel, and so on) should be uploaded for a given submission. Only teachers and students can perform this operation. Note that files must be located in this folder in order to be added as resources. Only a student in the class can determine what files to upload in a given submission-level resource folder. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/microsoft.graph.setUpResourcesFolder"
						}
					}
				},
				{
					"name": "Education Users Education User Assignments Education Assignment Submissions Education Submission Submit",
					"value": "Education Users Education User Assignments Education Assignment Submissions Education Submission Submit",
					"action": "Invoke action submit",
					"description": "Indicate that a student is done with the work and is ready to hand in the assignment. Only teachers, students, and applications with application permissions can perform this operation. This method changes the status of the submission from `working` to `submitted`. During the submit process, all the resources are copied to the **submittedResources** bucket. The teacher will be looking at the submitted resources list for grading. A teacher can also submit a student's assignment on their behalf.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/microsoft.graph.submit"
						}
					}
				},
				{
					"name": "Education Users Education User Assignments Education Assignment Submissions Education Submission Unsubmit",
					"value": "Education Users Education User Assignments Education Assignment Submissions Education Submission Unsubmit",
					"action": "Invoke action unsubmit",
					"description": "Indicate that a student wants to work on the submitted assignment after it was turned in. Only teachers, students, and applications with application permissions can perform this operation. This method changes the status of the submission from `submitted` to `working`. During the submit process, all the resources are copied from **submittedResources** to  **workingResources**. The teacher will be looking at the working resources list for grading. A teacher can also unsubmit a student's assignment on their behalf.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/education/users/{{$parameter[\"educationUser-id\"]}}/assignments/{{$parameter[\"educationAssignment-id\"]}}/submissions/{{$parameter[\"educationSubmission-id\"]}}/microsoft.graph.unsubmit"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/microsoft.graph.publish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Classes Education Class Assignments Education Assignment Publish"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/microsoft.graph.setUpFeedbackResourcesFolder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Classes Education Class Assignments Education Assignment Set Up Feedback Resources Folder"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/microsoft.graph.setUpResourcesFolder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Classes Education Class Assignments Education Assignment Set Up Resources Folder"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/microsoft.graph.reassign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Classes Education Class Assignments Education Assignment Submissions Education Submission Reassign"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/microsoft.graph.return",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Classes Education Class Assignments Education Assignment Submissions Education Submission Return"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/microsoft.graph.setUpResourcesFolder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Classes Education Class Assignments Education Assignment Submissions Education Submission Set Up Resources Folder"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/microsoft.graph.submit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Classes Education Class Assignments Education Assignment Submissions Education Submission Submit"
					]
				}
			}
		},
		{
			"displayName": "POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/microsoft.graph.unsubmit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Classes Education Class Assignments Education Assignment Submissions Education Submission Unsubmit"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/assignments/{educationAssignment-id}/microsoft.graph.publish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Me Assignments Education Assignment Publish"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/assignments/{educationAssignment-id}/microsoft.graph.setUpFeedbackResourcesFolder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Me Assignments Education Assignment Set Up Feedback Resources Folder"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/assignments/{educationAssignment-id}/microsoft.graph.setUpResourcesFolder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Me Assignments Education Assignment Set Up Resources Folder"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/microsoft.graph.reassign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Me Assignments Education Assignment Submissions Education Submission Reassign"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/microsoft.graph.return",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Me Assignments Education Assignment Submissions Education Submission Return"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/microsoft.graph.setUpResourcesFolder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Me Assignments Education Assignment Submissions Education Submission Set Up Resources Folder"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/microsoft.graph.submit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Me Assignments Education Assignment Submissions Education Submission Submit"
					]
				}
			}
		},
		{
			"displayName": "POST /education/me/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/microsoft.graph.unsubmit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Me Assignments Education Assignment Submissions Education Submission Unsubmit"
					]
				}
			}
		},
		{
			"displayName": "POST /education/synchronizationProfiles/{educationSynchronizationProfile-id}/microsoft.graph.pause",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Synchronization Profiles Education Synchronization Profile Pause"
					]
				}
			}
		},
		{
			"displayName": "POST /education/synchronizationProfiles/{educationSynchronizationProfile-id}/microsoft.graph.reset",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Synchronization Profiles Education Synchronization Profile Reset"
					]
				}
			}
		},
		{
			"displayName": "POST /education/synchronizationProfiles/{educationSynchronizationProfile-id}/microsoft.graph.resume",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Synchronization Profiles Education Synchronization Profile Resume"
					]
				}
			}
		},
		{
			"displayName": "POST /education/synchronizationProfiles/{educationSynchronizationProfile-id}/microsoft.graph.start",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Synchronization Profiles Education Synchronization Profile Start"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/microsoft.graph.publish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Users Education User Assignments Education Assignment Publish"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/microsoft.graph.setUpFeedbackResourcesFolder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Users Education User Assignments Education Assignment Set Up Feedback Resources Folder"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/microsoft.graph.setUpResourcesFolder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Users Education User Assignments Education Assignment Set Up Resources Folder"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/microsoft.graph.reassign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Users Education User Assignments Education Assignment Submissions Education Submission Reassign"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/microsoft.graph.return",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Users Education User Assignments Education Assignment Submissions Education Submission Return"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/microsoft.graph.setUpResourcesFolder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Users Education User Assignments Education Assignment Submissions Education Submission Set Up Resources Folder"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/microsoft.graph.submit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Users Education User Assignments Education Assignment Submissions Education Submission Submit"
					]
				}
			}
		},
		{
			"displayName": "POST /education/users/{educationUser-id}/assignments/{educationAssignment-id}/submissions/{educationSubmission-id}/microsoft.graph.unsubmit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Education Actions"
					],
					"operation": [
						"Education Users Education User Assignments Education Assignment Submissions Education Submission Unsubmit"
					]
				}
			}
		},
];
