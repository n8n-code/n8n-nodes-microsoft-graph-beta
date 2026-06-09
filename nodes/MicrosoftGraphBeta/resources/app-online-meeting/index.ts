import type { INodeProperties } from 'n8n-workflow';

export const appOnlineMeetingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					]
				}
			},
			"options": [
				{
					"name": "App List Online Meetings",
					"value": "App List Online Meetings",
					"action": "Get onlineMeetings from app",
					"description": "Get onlineMeetings from app",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/onlineMeetings"
						}
					}
				},
				{
					"name": "App Create Online Meetings",
					"value": "App Create Online Meetings",
					"action": "Create new navigation property to onlineMeetings for app",
					"description": "Create new navigation property to onlineMeetings for app",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/onlineMeetings"
						}
					}
				},
				{
					"name": "App Delete Online Meetings",
					"value": "App Delete Online Meetings",
					"action": "Delete navigation property onlineMeetings for app",
					"description": "Delete navigation property onlineMeetings for app",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}"
						}
					}
				},
				{
					"name": "App Get Online Meetings",
					"value": "App Get Online Meetings",
					"action": "Get onlineMeetings from app",
					"description": "Get onlineMeetings from app",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}"
						}
					}
				},
				{
					"name": "App Update Online Meetings",
					"value": "App Update Online Meetings",
					"action": "Update the navigation property onlineMeetings in app",
					"description": "Update the navigation property onlineMeetings in app",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}"
						}
					}
				},
				{
					"name": "App Get Online Meetings Alternative Recording",
					"value": "App Get Online Meetings Alternative Recording",
					"action": "Get alternativeRecording for the navigation property onlineMeetings from app",
					"description": "The content stream of the alternative recording of a Microsoft Teams live event. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/alternativeRecording"
						}
					}
				},
				{
					"name": "App Update Online Meetings Alternative Recording",
					"value": "App Update Online Meetings Alternative Recording",
					"action": "Update alternativeRecording for the navigation property onlineMeetings in app",
					"description": "The content stream of the alternative recording of a Microsoft Teams live event. Read-only.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/alternativeRecording"
						}
					}
				},
				{
					"name": "App Online Meetings List Attendance Reports",
					"value": "App Online Meetings List Attendance Reports",
					"action": "List meetingAttendanceReports",
					"description": "Get a list of meetingAttendanceReport objects for an onlineMeeting. Each time an online meeting ends, an attendance report is generated for that session.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports"
						}
					}
				},
				{
					"name": "App Online Meetings Create Attendance Reports",
					"value": "App Online Meetings Create Attendance Reports",
					"action": "Create new navigation property to attendanceReports for app",
					"description": "Create new navigation property to attendanceReports for app",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports"
						}
					}
				},
				{
					"name": "App Online Meetings Delete Attendance Reports",
					"value": "App Online Meetings Delete Attendance Reports",
					"action": "Delete navigation property attendanceReports for app",
					"description": "Delete navigation property attendanceReports for app",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports/{{$parameter[\"meetingAttendanceReport-id\"]}}"
						}
					}
				},
				{
					"name": "App Online Meetings Get Attendance Reports",
					"value": "App Online Meetings Get Attendance Reports",
					"action": "Get attendanceReports from app",
					"description": "The attendance reports of an online meeting. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports/{{$parameter[\"meetingAttendanceReport-id\"]}}"
						}
					}
				},
				{
					"name": "App Online Meetings Update Attendance Reports",
					"value": "App Online Meetings Update Attendance Reports",
					"action": "Update the navigation property attendanceReports in app",
					"description": "Update the navigation property attendanceReports in app",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports/{{$parameter[\"meetingAttendanceReport-id\"]}}"
						}
					}
				},
				{
					"name": "App Online Meetings Attendance Reports List Attendance Records",
					"value": "App Online Meetings Attendance Reports List Attendance Records",
					"action": "List attendanceRecords",
					"description": "Get a list of attendanceRecord objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports/{{$parameter[\"meetingAttendanceReport-id\"]}}/attendanceRecords"
						}
					}
				},
				{
					"name": "App Online Meetings Attendance Reports Create Attendance Records",
					"value": "App Online Meetings Attendance Reports Create Attendance Records",
					"action": "Create new navigation property to attendanceRecords for app",
					"description": "Create new navigation property to attendanceRecords for app",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports/{{$parameter[\"meetingAttendanceReport-id\"]}}/attendanceRecords"
						}
					}
				},
				{
					"name": "App Online Meetings Attendance Reports Delete Attendance Records",
					"value": "App Online Meetings Attendance Reports Delete Attendance Records",
					"action": "Delete navigation property attendanceRecords for app",
					"description": "Delete navigation property attendanceRecords for app",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports/{{$parameter[\"meetingAttendanceReport-id\"]}}/attendanceRecords/{{$parameter[\"attendanceRecord-id\"]}}"
						}
					}
				},
				{
					"name": "App Online Meetings Attendance Reports Get Attendance Records",
					"value": "App Online Meetings Attendance Reports Get Attendance Records",
					"action": "Get attendanceRecords from app",
					"description": "List of attendance records of an attendance report. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports/{{$parameter[\"meetingAttendanceReport-id\"]}}/attendanceRecords/{{$parameter[\"attendanceRecord-id\"]}}"
						}
					}
				},
				{
					"name": "App Online Meetings Attendance Reports Update Attendance Records",
					"value": "App Online Meetings Attendance Reports Update Attendance Records",
					"action": "Update the navigation property attendanceRecords in app",
					"description": "Update the navigation property attendanceRecords in app",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports/{{$parameter[\"meetingAttendanceReport-id\"]}}/attendanceRecords/{{$parameter[\"attendanceRecord-id\"]}}"
						}
					}
				},
				{
					"name": "App Get Online Meetings Attendee Report",
					"value": "App Get Online Meetings Attendee Report",
					"action": "Get attendeeReport for the navigation property onlineMeetings from app",
					"description": "The content stream of the attendee report of a Teams live event. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendeeReport"
						}
					}
				},
				{
					"name": "App Update Online Meetings Attendee Report",
					"value": "App Update Online Meetings Attendee Report",
					"action": "Update attendeeReport for the navigation property onlineMeetings in app",
					"description": "The content stream of the attendee report of a Teams live event. Read-only.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendeeReport"
						}
					}
				},
				{
					"name": "App Online Meetings Delete Meeting Attendance Report",
					"value": "App Online Meetings Delete Meeting Attendance Report",
					"action": "Delete navigation property meetingAttendanceReport for app",
					"description": "Delete navigation property meetingAttendanceReport for app",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/meetingAttendanceReport"
						}
					}
				},
				{
					"name": "App Online Meetings Get Meeting Attendance Report",
					"value": "App Online Meetings Get Meeting Attendance Report",
					"action": "Get meetingAttendanceReport",
					"description": "Get the meetingAttendanceReport for an onlineMeeting. Each time an online meeting ends, an attendance report will be generated for that session.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/meetingAttendanceReport"
						}
					}
				},
				{
					"name": "App Online Meetings Update Meeting Attendance Report",
					"value": "App Online Meetings Update Meeting Attendance Report",
					"action": "Update the navigation property meetingAttendanceReport in app",
					"description": "Update the navigation property meetingAttendanceReport in app",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/meetingAttendanceReport"
						}
					}
				},
				{
					"name": "App Online Meetings Meeting Attendance Report List Attendance Records",
					"value": "App Online Meetings Meeting Attendance Report List Attendance Records",
					"action": "List attendanceRecords",
					"description": "Get a list of attendanceRecord objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/meetingAttendanceReport/attendanceRecords"
						}
					}
				},
				{
					"name": "App Online Meetings Meeting Attendance Report Create Attendance Records",
					"value": "App Online Meetings Meeting Attendance Report Create Attendance Records",
					"action": "Create new navigation property to attendanceRecords for app",
					"description": "Create new navigation property to attendanceRecords for app",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/meetingAttendanceReport/attendanceRecords"
						}
					}
				},
				{
					"name": "App Online Meetings Meeting Attendance Report Delete Attendance Records",
					"value": "App Online Meetings Meeting Attendance Report Delete Attendance Records",
					"action": "Delete navigation property attendanceRecords for app",
					"description": "Delete navigation property attendanceRecords for app",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/meetingAttendanceReport/attendanceRecords/{{$parameter[\"attendanceRecord-id\"]}}"
						}
					}
				},
				{
					"name": "App Online Meetings Meeting Attendance Report Get Attendance Records",
					"value": "App Online Meetings Meeting Attendance Report Get Attendance Records",
					"action": "Get attendanceRecords from app",
					"description": "List of attendance records of an attendance report. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/meetingAttendanceReport/attendanceRecords/{{$parameter[\"attendanceRecord-id\"]}}"
						}
					}
				},
				{
					"name": "App Online Meetings Meeting Attendance Report Update Attendance Records",
					"value": "App Online Meetings Meeting Attendance Report Update Attendance Records",
					"action": "Update the navigation property attendanceRecords in app",
					"description": "Update the navigation property attendanceRecords in app",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/meetingAttendanceReport/attendanceRecords/{{$parameter[\"attendanceRecord-id\"]}}"
						}
					}
				},
				{
					"name": "App Get Online Meetings Recording",
					"value": "App Get Online Meetings Recording",
					"action": "Get recording for the navigation property onlineMeetings from app",
					"description": "The content stream of the recording of a Teams live event. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/recording"
						}
					}
				},
				{
					"name": "App Update Online Meetings Recording",
					"value": "App Update Online Meetings Recording",
					"action": "Update recording for the navigation property onlineMeetings in app",
					"description": "The content stream of the recording of a Teams live event. Read-only.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/recording"
						}
					}
				},
				{
					"name": "App Online Meetings Delete Registration",
					"value": "App Online Meetings Delete Registration",
					"action": "Delete externalMeetingRegistration",
					"description": "Disable and delete the externalMeetingRegistration of an onlineMeeting.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/registration"
						}
					}
				},
				{
					"name": "App Online Meetings Get Registration",
					"value": "App Online Meetings Get Registration",
					"action": "Get externalMeetingRegistration",
					"description": "Get the externalMeetingRegistration details associated with an onlineMeeting.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/registration"
						}
					}
				},
				{
					"name": "App Online Meetings Update Registration",
					"value": "App Online Meetings Update Registration",
					"action": "Update meetingRegistration",
					"description": "Update the details of a meetingRegistration object assciated with an onlineMeeting on behalf of the organizer.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/registration"
						}
					}
				},
				{
					"name": "App Online Meetings Registration List Custom Questions",
					"value": "App Online Meetings Registration List Custom Questions",
					"action": "List customQuestions",
					"description": "Get a list of the custom registration questions associated with a meetingRegistration object on behalf of the organizer.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/registration/customQuestions"
						}
					}
				},
				{
					"name": "App Online Meetings Registration Create Custom Questions",
					"value": "App Online Meetings Registration Create Custom Questions",
					"action": "Create meetingRegistrationQuestion",
					"description": "Create a custom registration question associated with a meetingRegistration object on behalf of the organizer.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/registration/customQuestions"
						}
					}
				},
				{
					"name": "App Online Meetings Registration Delete Custom Questions",
					"value": "App Online Meetings Registration Delete Custom Questions",
					"action": "Delete navigation property customQuestions for app",
					"description": "Delete navigation property customQuestions for app",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/registration/customQuestions/{{$parameter[\"meetingRegistrationQuestion-id\"]}}"
						}
					}
				},
				{
					"name": "App Online Meetings Registration Get Custom Questions",
					"value": "App Online Meetings Registration Get Custom Questions",
					"action": "Get customQuestions from app",
					"description": "Custom registration questions.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/registration/customQuestions/{{$parameter[\"meetingRegistrationQuestion-id\"]}}"
						}
					}
				},
				{
					"name": "App Online Meetings Registration Update Custom Questions",
					"value": "App Online Meetings Registration Update Custom Questions",
					"action": "Update the navigation property customQuestions in app",
					"description": "Update the navigation property customQuestions in app",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/registration/customQuestions/{{$parameter[\"meetingRegistrationQuestion-id\"]}}"
						}
					}
				},
				{
					"name": "App Online Meetings List Transcripts",
					"value": "App Online Meetings List Transcripts",
					"action": "List transcripts",
					"description": "Retrieve the list of callTranscript objects associated with an onlineMeeting.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/transcripts"
						}
					}
				},
				{
					"name": "App Online Meetings Create Transcripts",
					"value": "App Online Meetings Create Transcripts",
					"action": "Create new navigation property to transcripts for app",
					"description": "Create new navigation property to transcripts for app",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/transcripts"
						}
					}
				},
				{
					"name": "App Online Meetings Delete Transcripts",
					"value": "App Online Meetings Delete Transcripts",
					"action": "Delete navigation property transcripts for app",
					"description": "Delete navigation property transcripts for app",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/transcripts/{{$parameter[\"callTranscript-id\"]}}"
						}
					}
				},
				{
					"name": "App Online Meetings Get Transcripts",
					"value": "App Online Meetings Get Transcripts",
					"action": "Get transcripts from app",
					"description": "The transcripts of an online meeting. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/transcripts/{{$parameter[\"callTranscript-id\"]}}"
						}
					}
				},
				{
					"name": "App Online Meetings Update Transcripts",
					"value": "App Online Meetings Update Transcripts",
					"action": "Update the navigation property transcripts in app",
					"description": "Update the navigation property transcripts in app",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/transcripts/{{$parameter[\"callTranscript-id\"]}}"
						}
					}
				},
				{
					"name": "App Online Meetings Get Transcripts Content",
					"value": "App Online Meetings Get Transcripts Content",
					"action": "Get content for the navigation property transcripts from app",
					"description": "A field that represents the content of the transcript. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/transcripts/{{$parameter[\"callTranscript-id\"]}}/content"
						}
					}
				},
				{
					"name": "App Online Meetings Update Transcripts Content",
					"value": "App Online Meetings Update Transcripts Content",
					"action": "Update content for the navigation property transcripts in app",
					"description": "A field that represents the content of the transcript. Read-only.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/transcripts/{{$parameter[\"callTranscript-id\"]}}/content"
						}
					}
				},
				{
					"name": "App Online Meetings Delete Virtual Appointment",
					"value": "App Online Meetings Delete Virtual Appointment",
					"action": "Delete navigation property virtualAppointment for app",
					"description": "Delete navigation property virtualAppointment for app",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/virtualAppointment"
						}
					}
				},
				{
					"name": "App Online Meetings Get Virtual Appointment",
					"value": "App Online Meetings Get Virtual Appointment",
					"action": "Get virtualAppointment from app",
					"description": "Get virtualAppointment from app",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/virtualAppointment"
						}
					}
				},
				{
					"name": "App Online Meetings Update Virtual Appointment",
					"value": "App Online Meetings Update Virtual Appointment",
					"action": "Update the navigation property virtualAppointment in app",
					"description": "Update the navigation property virtualAppointment in app",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/app/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/virtualAppointment"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /app/onlineMeetings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App List Online Meetings"
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
						"App Online Meeting"
					],
					"operation": [
						"App List Online Meetings"
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
						"App Online Meeting"
					],
					"operation": [
						"App List Online Meetings"
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
						"App Online Meeting"
					],
					"operation": [
						"App List Online Meetings"
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
						"App Online Meeting"
					],
					"operation": [
						"App List Online Meetings"
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
						"App Online Meeting"
					],
					"operation": [
						"App List Online Meetings"
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
						"App Online Meeting"
					],
					"operation": [
						"App List Online Meetings"
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
						"App Online Meeting"
					],
					"operation": [
						"App List Online Meetings"
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
						"App Online Meeting"
					],
					"operation": [
						"App List Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "POST /app/onlineMeetings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Create Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "POST /app/onlineMeetings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Create Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /app/onlineMeetings/{onlineMeeting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Delete Online Meetings"
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
						"App Online Meeting"
					],
					"operation": [
						"App Delete Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "GET /app/onlineMeetings/{onlineMeeting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Get Online Meetings"
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
						"App Online Meeting"
					],
					"operation": [
						"App Get Online Meetings"
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
						"App Online Meeting"
					],
					"operation": [
						"App Get Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/onlineMeetings/{onlineMeeting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Update Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/onlineMeetings/{onlineMeeting-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Update Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "GET /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Get Online Meetings Alternative Recording"
					]
				}
			}
		},
		{
			"displayName": "PUT /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Update Online Meetings Alternative Recording"
					]
				}
			}
		},
		{
			"displayName": "PUT /app/onlineMeetings/{onlineMeeting-id}/alternativeRecording<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Update Online Meetings Alternative Recording"
					]
				}
			}
		},
		{
			"displayName": "GET /app/onlineMeetings/{onlineMeeting-id}/attendanceReports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings List Attendance Reports"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings List Attendance Reports"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings List Attendance Reports"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings List Attendance Reports"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings List Attendance Reports"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings List Attendance Reports"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings List Attendance Reports"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings List Attendance Reports"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings List Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "POST /app/onlineMeetings/{onlineMeeting-id}/attendanceReports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Create Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "POST /app/onlineMeetings/{onlineMeeting-id}/attendanceReports<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Create Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "DELETE /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Delete Attendance Reports"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Delete Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "GET /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Get Attendance Reports"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Get Attendance Reports"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Get Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Update Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Update Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "GET /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Attendance Reports List Attendance Records"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Attendance Reports List Attendance Records"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Attendance Reports List Attendance Records"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Attendance Reports List Attendance Records"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Attendance Reports List Attendance Records"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Attendance Reports List Attendance Records"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Attendance Reports List Attendance Records"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Attendance Reports List Attendance Records"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Attendance Reports List Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "POST /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Attendance Reports Create Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "POST /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Attendance Reports Create Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "DELETE /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Attendance Reports Delete Attendance Records"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Attendance Reports Delete Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "GET /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Attendance Reports Get Attendance Records"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Attendance Reports Get Attendance Records"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Attendance Reports Get Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Attendance Reports Update Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Attendance Reports Update Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "GET /app/onlineMeetings/{onlineMeeting-id}/attendeeReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Get Online Meetings Attendee Report"
					]
				}
			}
		},
		{
			"displayName": "PUT /app/onlineMeetings/{onlineMeeting-id}/attendeeReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Update Online Meetings Attendee Report"
					]
				}
			}
		},
		{
			"displayName": "PUT /app/onlineMeetings/{onlineMeeting-id}/attendeeReport<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Update Online Meetings Attendee Report"
					]
				}
			}
		},
		{
			"displayName": "DELETE /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Delete Meeting Attendance Report"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Delete Meeting Attendance Report"
					]
				}
			}
		},
		{
			"displayName": "GET /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Get Meeting Attendance Report"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Get Meeting Attendance Report"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Get Meeting Attendance Report"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Update Meeting Attendance Report"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Update Meeting Attendance Report"
					]
				}
			}
		},
		{
			"displayName": "GET /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Meeting Attendance Report List Attendance Records"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Meeting Attendance Report List Attendance Records"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Meeting Attendance Report List Attendance Records"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Meeting Attendance Report List Attendance Records"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Meeting Attendance Report List Attendance Records"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Meeting Attendance Report List Attendance Records"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Meeting Attendance Report List Attendance Records"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Meeting Attendance Report List Attendance Records"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Meeting Attendance Report List Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "POST /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Meeting Attendance Report Create Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "POST /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Meeting Attendance Report Create Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "DELETE /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Meeting Attendance Report Delete Attendance Records"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Meeting Attendance Report Delete Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "GET /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Meeting Attendance Report Get Attendance Records"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Meeting Attendance Report Get Attendance Records"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Meeting Attendance Report Get Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Meeting Attendance Report Update Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Meeting Attendance Report Update Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "GET /app/onlineMeetings/{onlineMeeting-id}/recording",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Get Online Meetings Recording"
					]
				}
			}
		},
		{
			"displayName": "PUT /app/onlineMeetings/{onlineMeeting-id}/recording",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Update Online Meetings Recording"
					]
				}
			}
		},
		{
			"displayName": "PUT /app/onlineMeetings/{onlineMeeting-id}/recording<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Update Online Meetings Recording"
					]
				}
			}
		},
		{
			"displayName": "DELETE /app/onlineMeetings/{onlineMeeting-id}/registration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Delete Registration"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Delete Registration"
					]
				}
			}
		},
		{
			"displayName": "GET /app/onlineMeetings/{onlineMeeting-id}/registration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Get Registration"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Get Registration"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Get Registration"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/onlineMeetings/{onlineMeeting-id}/registration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Update Registration"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/onlineMeetings/{onlineMeeting-id}/registration<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Update Registration"
					]
				}
			}
		},
		{
			"displayName": "GET /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Registration List Custom Questions"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Registration List Custom Questions"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Registration List Custom Questions"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Registration List Custom Questions"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Registration List Custom Questions"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Registration List Custom Questions"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Registration List Custom Questions"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Registration List Custom Questions"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Registration List Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "POST /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Registration Create Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "POST /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Registration Create Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Registration Delete Custom Questions"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Registration Delete Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "GET /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Registration Get Custom Questions"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Registration Get Custom Questions"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Registration Get Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Registration Update Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Registration Update Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "GET /app/onlineMeetings/{onlineMeeting-id}/transcripts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings List Transcripts"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings List Transcripts"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings List Transcripts"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings List Transcripts"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings List Transcripts"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings List Transcripts"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings List Transcripts"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings List Transcripts"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings List Transcripts"
					]
				}
			}
		},
		{
			"displayName": "POST /app/onlineMeetings/{onlineMeeting-id}/transcripts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Create Transcripts"
					]
				}
			}
		},
		{
			"displayName": "POST /app/onlineMeetings/{onlineMeeting-id}/transcripts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Create Transcripts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Delete Transcripts"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Delete Transcripts"
					]
				}
			}
		},
		{
			"displayName": "GET /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Get Transcripts"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Get Transcripts"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Get Transcripts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Update Transcripts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Update Transcripts"
					]
				}
			}
		},
		{
			"displayName": "GET /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Get Transcripts Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Update Transcripts Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /app/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Update Transcripts Content"
					]
				}
			}
		},
		{
			"displayName": "DELETE /app/onlineMeetings/{onlineMeeting-id}/virtualAppointment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Delete Virtual Appointment"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Delete Virtual Appointment"
					]
				}
			}
		},
		{
			"displayName": "GET /app/onlineMeetings/{onlineMeeting-id}/virtualAppointment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Get Virtual Appointment"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Get Virtual Appointment"
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
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Get Virtual Appointment"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/onlineMeetings/{onlineMeeting-id}/virtualAppointment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Update Virtual Appointment"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/onlineMeetings/{onlineMeeting-id}/virtualAppointment<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Online Meeting"
					],
					"operation": [
						"App Online Meetings Update Virtual Appointment"
					]
				}
			}
		},
];
