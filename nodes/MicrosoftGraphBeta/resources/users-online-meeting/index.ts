import type { INodeProperties } from 'n8n-workflow';

export const usersOnlineMeetingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					]
				}
			},
			"options": [
				{
					"name": "Users List Online Meetings",
					"value": "Users List Online Meetings",
					"action": "Get onlineMeeting",
					"description": "Retrieve the properties and relationships of an onlineMeeting object. For example, you can: Teams live event attendee report and Teams live event recordings are online meeting artifacts. For details, see Online meeting artifacts and permissions.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings"
						}
					}
				},
				{
					"name": "Users Create Online Meetings",
					"value": "Users Create Online Meetings",
					"action": "Create onlineMeeting",
					"description": "Create an online meeting on behalf of a user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings"
						}
					}
				},
				{
					"name": "Users Delete Online Meetings",
					"value": "Users Delete Online Meetings",
					"action": "Delete navigation property onlineMeetings for users",
					"description": "Delete navigation property onlineMeetings for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}"
						}
					}
				},
				{
					"name": "Users Get Online Meetings",
					"value": "Users Get Online Meetings",
					"action": "Get onlineMeetings from users",
					"description": "Get onlineMeetings from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}"
						}
					}
				},
				{
					"name": "Users Update Online Meetings",
					"value": "Users Update Online Meetings",
					"action": "Update the navigation property onlineMeetings in users",
					"description": "Update the navigation property onlineMeetings in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}"
						}
					}
				},
				{
					"name": "Users Get Online Meetings Alternative Recording",
					"value": "Users Get Online Meetings Alternative Recording",
					"action": "Get alternativeRecording for the navigation property onlineMeetings from users",
					"description": "The content stream of the alternative recording of a Microsoft Teams live event. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/alternativeRecording"
						}
					}
				},
				{
					"name": "Users Update Online Meetings Alternative Recording",
					"value": "Users Update Online Meetings Alternative Recording",
					"action": "Update alternativeRecording for the navigation property onlineMeetings in users",
					"description": "The content stream of the alternative recording of a Microsoft Teams live event. Read-only.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/alternativeRecording"
						}
					}
				},
				{
					"name": "Users Online Meetings List Attendance Reports",
					"value": "Users Online Meetings List Attendance Reports",
					"action": "List meetingAttendanceReports",
					"description": "Get a list of meetingAttendanceReport objects for an onlineMeeting. Each time an online meeting ends, an attendance report is generated for that session.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports"
						}
					}
				},
				{
					"name": "Users Online Meetings Create Attendance Reports",
					"value": "Users Online Meetings Create Attendance Reports",
					"action": "Create new navigation property to attendanceReports for users",
					"description": "Create new navigation property to attendanceReports for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports"
						}
					}
				},
				{
					"name": "Users Online Meetings Delete Attendance Reports",
					"value": "Users Online Meetings Delete Attendance Reports",
					"action": "Delete navigation property attendanceReports for users",
					"description": "Delete navigation property attendanceReports for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports/{{$parameter[\"meetingAttendanceReport-id\"]}}"
						}
					}
				},
				{
					"name": "Users Online Meetings Get Attendance Reports",
					"value": "Users Online Meetings Get Attendance Reports",
					"action": "Get attendanceReports from users",
					"description": "The attendance reports of an online meeting. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports/{{$parameter[\"meetingAttendanceReport-id\"]}}"
						}
					}
				},
				{
					"name": "Users Online Meetings Update Attendance Reports",
					"value": "Users Online Meetings Update Attendance Reports",
					"action": "Update the navigation property attendanceReports in users",
					"description": "Update the navigation property attendanceReports in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports/{{$parameter[\"meetingAttendanceReport-id\"]}}"
						}
					}
				},
				{
					"name": "Users Online Meetings Attendance Reports List Attendance Records",
					"value": "Users Online Meetings Attendance Reports List Attendance Records",
					"action": "List attendanceRecords",
					"description": "Get a list of attendanceRecord objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports/{{$parameter[\"meetingAttendanceReport-id\"]}}/attendanceRecords"
						}
					}
				},
				{
					"name": "Users Online Meetings Attendance Reports Create Attendance Records",
					"value": "Users Online Meetings Attendance Reports Create Attendance Records",
					"action": "Create new navigation property to attendanceRecords for users",
					"description": "Create new navigation property to attendanceRecords for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports/{{$parameter[\"meetingAttendanceReport-id\"]}}/attendanceRecords"
						}
					}
				},
				{
					"name": "Users Online Meetings Attendance Reports Delete Attendance Records",
					"value": "Users Online Meetings Attendance Reports Delete Attendance Records",
					"action": "Delete navigation property attendanceRecords for users",
					"description": "Delete navigation property attendanceRecords for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports/{{$parameter[\"meetingAttendanceReport-id\"]}}/attendanceRecords/{{$parameter[\"attendanceRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Users Online Meetings Attendance Reports Get Attendance Records",
					"value": "Users Online Meetings Attendance Reports Get Attendance Records",
					"action": "Get attendanceRecords from users",
					"description": "List of attendance records of an attendance report. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports/{{$parameter[\"meetingAttendanceReport-id\"]}}/attendanceRecords/{{$parameter[\"attendanceRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Users Online Meetings Attendance Reports Update Attendance Records",
					"value": "Users Online Meetings Attendance Reports Update Attendance Records",
					"action": "Update the navigation property attendanceRecords in users",
					"description": "Update the navigation property attendanceRecords in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports/{{$parameter[\"meetingAttendanceReport-id\"]}}/attendanceRecords/{{$parameter[\"attendanceRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Users Get Online Meetings Attendee Report",
					"value": "Users Get Online Meetings Attendee Report",
					"action": "Get attendeeReport for the navigation property onlineMeetings from users",
					"description": "The content stream of the attendee report of a Teams live event. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendeeReport"
						}
					}
				},
				{
					"name": "Users Update Online Meetings Attendee Report",
					"value": "Users Update Online Meetings Attendee Report",
					"action": "Update attendeeReport for the navigation property onlineMeetings in users",
					"description": "The content stream of the attendee report of a Teams live event. Read-only.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendeeReport"
						}
					}
				},
				{
					"name": "Users Online Meetings Delete Meeting Attendance Report",
					"value": "Users Online Meetings Delete Meeting Attendance Report",
					"action": "Delete navigation property meetingAttendanceReport for users",
					"description": "Delete navigation property meetingAttendanceReport for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/meetingAttendanceReport"
						}
					}
				},
				{
					"name": "Users Online Meetings Get Meeting Attendance Report",
					"value": "Users Online Meetings Get Meeting Attendance Report",
					"action": "Get meetingAttendanceReport",
					"description": "Get the meetingAttendanceReport for an onlineMeeting. Each time an online meeting ends, an attendance report will be generated for that session.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/meetingAttendanceReport"
						}
					}
				},
				{
					"name": "Users Online Meetings Update Meeting Attendance Report",
					"value": "Users Online Meetings Update Meeting Attendance Report",
					"action": "Update the navigation property meetingAttendanceReport in users",
					"description": "Update the navigation property meetingAttendanceReport in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/meetingAttendanceReport"
						}
					}
				},
				{
					"name": "Users Online Meetings Meeting Attendance Report List Attendance Records",
					"value": "Users Online Meetings Meeting Attendance Report List Attendance Records",
					"action": "List attendanceRecords",
					"description": "Get a list of attendanceRecord objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/meetingAttendanceReport/attendanceRecords"
						}
					}
				},
				{
					"name": "Users Online Meetings Meeting Attendance Report Create Attendance Records",
					"value": "Users Online Meetings Meeting Attendance Report Create Attendance Records",
					"action": "Create new navigation property to attendanceRecords for users",
					"description": "Create new navigation property to attendanceRecords for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/meetingAttendanceReport/attendanceRecords"
						}
					}
				},
				{
					"name": "Users Online Meetings Meeting Attendance Report Delete Attendance Records",
					"value": "Users Online Meetings Meeting Attendance Report Delete Attendance Records",
					"action": "Delete navigation property attendanceRecords for users",
					"description": "Delete navigation property attendanceRecords for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/meetingAttendanceReport/attendanceRecords/{{$parameter[\"attendanceRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Users Online Meetings Meeting Attendance Report Get Attendance Records",
					"value": "Users Online Meetings Meeting Attendance Report Get Attendance Records",
					"action": "Get attendanceRecords from users",
					"description": "List of attendance records of an attendance report. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/meetingAttendanceReport/attendanceRecords/{{$parameter[\"attendanceRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Users Online Meetings Meeting Attendance Report Update Attendance Records",
					"value": "Users Online Meetings Meeting Attendance Report Update Attendance Records",
					"action": "Update the navigation property attendanceRecords in users",
					"description": "Update the navigation property attendanceRecords in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/meetingAttendanceReport/attendanceRecords/{{$parameter[\"attendanceRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Users Get Online Meetings Recording",
					"value": "Users Get Online Meetings Recording",
					"action": "Get recording for the navigation property onlineMeetings from users",
					"description": "The content stream of the recording of a Teams live event. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/recording"
						}
					}
				},
				{
					"name": "Users Update Online Meetings Recording",
					"value": "Users Update Online Meetings Recording",
					"action": "Update recording for the navigation property onlineMeetings in users",
					"description": "The content stream of the recording of a Teams live event. Read-only.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/recording"
						}
					}
				},
				{
					"name": "Users Online Meetings Delete Registration",
					"value": "Users Online Meetings Delete Registration",
					"action": "Delete externalMeetingRegistration",
					"description": "Disable and delete the externalMeetingRegistration of an onlineMeeting.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/registration"
						}
					}
				},
				{
					"name": "Users Online Meetings Get Registration",
					"value": "Users Online Meetings Get Registration",
					"action": "Get externalMeetingRegistration",
					"description": "Get the externalMeetingRegistration details associated with an onlineMeeting.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/registration"
						}
					}
				},
				{
					"name": "Users Online Meetings Update Registration",
					"value": "Users Online Meetings Update Registration",
					"action": "Update meetingRegistration",
					"description": "Update the details of a meetingRegistration object assciated with an onlineMeeting on behalf of the organizer.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/registration"
						}
					}
				},
				{
					"name": "Users Online Meetings Registration List Custom Questions",
					"value": "Users Online Meetings Registration List Custom Questions",
					"action": "List customQuestions",
					"description": "Get a list of the custom registration questions associated with a meetingRegistration object on behalf of the organizer.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/registration/customQuestions"
						}
					}
				},
				{
					"name": "Users Online Meetings Registration Create Custom Questions",
					"value": "Users Online Meetings Registration Create Custom Questions",
					"action": "Create meetingRegistrationQuestion",
					"description": "Create a custom registration question associated with a meetingRegistration object on behalf of the organizer.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/registration/customQuestions"
						}
					}
				},
				{
					"name": "Users Online Meetings Registration Delete Custom Questions",
					"value": "Users Online Meetings Registration Delete Custom Questions",
					"action": "Delete navigation property customQuestions for users",
					"description": "Delete navigation property customQuestions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/registration/customQuestions/{{$parameter[\"meetingRegistrationQuestion-id\"]}}"
						}
					}
				},
				{
					"name": "Users Online Meetings Registration Get Custom Questions",
					"value": "Users Online Meetings Registration Get Custom Questions",
					"action": "Get customQuestions from users",
					"description": "Custom registration questions.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/registration/customQuestions/{{$parameter[\"meetingRegistrationQuestion-id\"]}}"
						}
					}
				},
				{
					"name": "Users Online Meetings Registration Update Custom Questions",
					"value": "Users Online Meetings Registration Update Custom Questions",
					"action": "Update the navigation property customQuestions in users",
					"description": "Update the navigation property customQuestions in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/registration/customQuestions/{{$parameter[\"meetingRegistrationQuestion-id\"]}}"
						}
					}
				},
				{
					"name": "Users Online Meetings List Transcripts",
					"value": "Users Online Meetings List Transcripts",
					"action": "List transcripts",
					"description": "Retrieve the list of callTranscript objects associated with an onlineMeeting.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/transcripts"
						}
					}
				},
				{
					"name": "Users Online Meetings Create Transcripts",
					"value": "Users Online Meetings Create Transcripts",
					"action": "Create new navigation property to transcripts for users",
					"description": "Create new navigation property to transcripts for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/transcripts"
						}
					}
				},
				{
					"name": "Users Online Meetings Delete Transcripts",
					"value": "Users Online Meetings Delete Transcripts",
					"action": "Delete navigation property transcripts for users",
					"description": "Delete navigation property transcripts for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/transcripts/{{$parameter[\"callTranscript-id\"]}}"
						}
					}
				},
				{
					"name": "Users Online Meetings Get Transcripts",
					"value": "Users Online Meetings Get Transcripts",
					"action": "Get transcripts from users",
					"description": "The transcripts of an online meeting. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/transcripts/{{$parameter[\"callTranscript-id\"]}}"
						}
					}
				},
				{
					"name": "Users Online Meetings Update Transcripts",
					"value": "Users Online Meetings Update Transcripts",
					"action": "Update the navigation property transcripts in users",
					"description": "Update the navigation property transcripts in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/transcripts/{{$parameter[\"callTranscript-id\"]}}"
						}
					}
				},
				{
					"name": "Users Online Meetings Get Transcripts Content",
					"value": "Users Online Meetings Get Transcripts Content",
					"action": "Get content for the navigation property transcripts from users",
					"description": "A field that represents the content of the transcript. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/transcripts/{{$parameter[\"callTranscript-id\"]}}/content"
						}
					}
				},
				{
					"name": "Users Online Meetings Update Transcripts Content",
					"value": "Users Online Meetings Update Transcripts Content",
					"action": "Update content for the navigation property transcripts in users",
					"description": "A field that represents the content of the transcript. Read-only.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/transcripts/{{$parameter[\"callTranscript-id\"]}}/content"
						}
					}
				},
				{
					"name": "Users Online Meetings Delete Virtual Appointment",
					"value": "Users Online Meetings Delete Virtual Appointment",
					"action": "Delete navigation property virtualAppointment for users",
					"description": "Delete navigation property virtualAppointment for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/virtualAppointment"
						}
					}
				},
				{
					"name": "Users Online Meetings Get Virtual Appointment",
					"value": "Users Online Meetings Get Virtual Appointment",
					"action": "Get virtualAppointment from users",
					"description": "Get virtualAppointment from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/virtualAppointment"
						}
					}
				},
				{
					"name": "Users Online Meetings Update Virtual Appointment",
					"value": "Users Online Meetings Update Virtual Appointment",
					"action": "Update the navigation property virtualAppointment in users",
					"description": "Update the navigation property virtualAppointment in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/virtualAppointment"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/{user-id}/onlineMeetings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users List Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users List Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users List Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users List Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users List Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users List Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users List Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users List Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users List Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onlineMeetings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Create Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onlineMeetings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Create Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Delete Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Delete Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Get Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Get Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Get Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Update Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Update Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Get Online Meetings Alternative Recording"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Update Online Meetings Alternative Recording"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/alternativeRecording<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Update Online Meetings Alternative Recording"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings List Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings List Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings List Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings List Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings List Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings List Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings List Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings List Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings List Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Create Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Create Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Delete Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Delete Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Get Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Get Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Get Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Update Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Update Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Attendance Reports List Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Attendance Reports List Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Attendance Reports List Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Attendance Reports List Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Attendance Reports List Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Attendance Reports List Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Attendance Reports List Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Attendance Reports List Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Attendance Reports List Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Attendance Reports Create Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Attendance Reports Create Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Attendance Reports Delete Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Attendance Reports Delete Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Attendance Reports Get Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Attendance Reports Get Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Attendance Reports Get Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Attendance Reports Update Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Attendance Reports Update Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Get Online Meetings Attendee Report"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Update Online Meetings Attendee Report"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/attendeeReport<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Update Online Meetings Attendee Report"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Delete Meeting Attendance Report"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Delete Meeting Attendance Report"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Get Meeting Attendance Report"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Get Meeting Attendance Report"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Get Meeting Attendance Report"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Update Meeting Attendance Report"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Update Meeting Attendance Report"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Meeting Attendance Report List Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Meeting Attendance Report List Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Meeting Attendance Report List Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Meeting Attendance Report List Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Meeting Attendance Report List Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Meeting Attendance Report List Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Meeting Attendance Report List Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Meeting Attendance Report List Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Meeting Attendance Report List Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Meeting Attendance Report Create Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Meeting Attendance Report Create Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Meeting Attendance Report Delete Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Meeting Attendance Report Delete Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Meeting Attendance Report Get Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Meeting Attendance Report Get Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Meeting Attendance Report Get Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Meeting Attendance Report Update Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Meeting Attendance Report Update Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recording",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Get Online Meetings Recording"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recording",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Update Online Meetings Recording"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/recording<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Update Online Meetings Recording"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Delete Registration"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Delete Registration"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Get Registration"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Get Registration"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Get Registration"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Update Registration"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Update Registration"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Registration List Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Registration List Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Registration List Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Registration List Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Registration List Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Registration List Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Registration List Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Registration List Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Registration List Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Registration Create Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Registration Create Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Registration Delete Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Registration Delete Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Registration Get Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Registration Get Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Registration Get Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Registration Update Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Registration Update Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings List Transcripts"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings List Transcripts"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings List Transcripts"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings List Transcripts"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings List Transcripts"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings List Transcripts"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings List Transcripts"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings List Transcripts"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings List Transcripts"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Create Transcripts"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Create Transcripts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Delete Transcripts"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Delete Transcripts"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Get Transcripts"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Get Transcripts"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Get Transcripts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Update Transcripts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Update Transcripts"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Get Transcripts Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Update Transcripts Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Update Transcripts Content"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/onlineMeetings/{onlineMeeting-id}/virtualAppointment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Delete Virtual Appointment"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Delete Virtual Appointment"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/onlineMeetings/{onlineMeeting-id}/virtualAppointment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Get Virtual Appointment"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Get Virtual Appointment"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Get Virtual Appointment"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/virtualAppointment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Update Virtual Appointment"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/onlineMeetings/{onlineMeeting-id}/virtualAppointment<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Online Meeting"
					],
					"operation": [
						"Users Online Meetings Update Virtual Appointment"
					]
				}
			}
		},
];
