import type { INodeProperties } from 'n8n-workflow';

export const meOnlineMeetingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					]
				}
			},
			"options": [
				{
					"name": "Me List Online Meetings",
					"value": "Me List Online Meetings",
					"action": "Get onlineMeeting",
					"description": "Retrieve the properties and relationships of an onlineMeeting object. For example, you can: Teams live event attendee report and Teams live event recordings are online meeting artifacts. For details, see Online meeting artifacts and permissions.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onlineMeetings"
						}
					}
				},
				{
					"name": "Me Create Online Meetings",
					"value": "Me Create Online Meetings",
					"action": "Create onlineMeeting",
					"description": "Create an online meeting on behalf of a user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/onlineMeetings"
						}
					}
				},
				{
					"name": "Me Delete Online Meetings",
					"value": "Me Delete Online Meetings",
					"action": "Delete navigation property onlineMeetings for me",
					"description": "Delete navigation property onlineMeetings for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}"
						}
					}
				},
				{
					"name": "Me Get Online Meetings",
					"value": "Me Get Online Meetings",
					"action": "Get onlineMeetings from me",
					"description": "Get onlineMeetings from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}"
						}
					}
				},
				{
					"name": "Me Update Online Meetings",
					"value": "Me Update Online Meetings",
					"action": "Update the navigation property onlineMeetings in me",
					"description": "Update the navigation property onlineMeetings in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}"
						}
					}
				},
				{
					"name": "Me Get Online Meetings Alternative Recording",
					"value": "Me Get Online Meetings Alternative Recording",
					"action": "Get alternativeRecording for the navigation property onlineMeetings from me",
					"description": "The content stream of the alternative recording of a Microsoft Teams live event. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/alternativeRecording"
						}
					}
				},
				{
					"name": "Me Update Online Meetings Alternative Recording",
					"value": "Me Update Online Meetings Alternative Recording",
					"action": "Update alternativeRecording for the navigation property onlineMeetings in me",
					"description": "The content stream of the alternative recording of a Microsoft Teams live event. Read-only.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/alternativeRecording"
						}
					}
				},
				{
					"name": "Me Online Meetings List Attendance Reports",
					"value": "Me Online Meetings List Attendance Reports",
					"action": "List meetingAttendanceReports",
					"description": "Get a list of meetingAttendanceReport objects for an onlineMeeting. Each time an online meeting ends, an attendance report is generated for that session.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports"
						}
					}
				},
				{
					"name": "Me Online Meetings Create Attendance Reports",
					"value": "Me Online Meetings Create Attendance Reports",
					"action": "Create new navigation property to attendanceReports for me",
					"description": "Create new navigation property to attendanceReports for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports"
						}
					}
				},
				{
					"name": "Me Online Meetings Delete Attendance Reports",
					"value": "Me Online Meetings Delete Attendance Reports",
					"action": "Delete navigation property attendanceReports for me",
					"description": "Delete navigation property attendanceReports for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports/{{$parameter[\"meetingAttendanceReport-id\"]}}"
						}
					}
				},
				{
					"name": "Me Online Meetings Get Attendance Reports",
					"value": "Me Online Meetings Get Attendance Reports",
					"action": "Get attendanceReports from me",
					"description": "The attendance reports of an online meeting. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports/{{$parameter[\"meetingAttendanceReport-id\"]}}"
						}
					}
				},
				{
					"name": "Me Online Meetings Update Attendance Reports",
					"value": "Me Online Meetings Update Attendance Reports",
					"action": "Update the navigation property attendanceReports in me",
					"description": "Update the navigation property attendanceReports in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports/{{$parameter[\"meetingAttendanceReport-id\"]}}"
						}
					}
				},
				{
					"name": "Me Online Meetings Attendance Reports List Attendance Records",
					"value": "Me Online Meetings Attendance Reports List Attendance Records",
					"action": "List attendanceRecords",
					"description": "Get a list of attendanceRecord objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports/{{$parameter[\"meetingAttendanceReport-id\"]}}/attendanceRecords"
						}
					}
				},
				{
					"name": "Me Online Meetings Attendance Reports Create Attendance Records",
					"value": "Me Online Meetings Attendance Reports Create Attendance Records",
					"action": "Create new navigation property to attendanceRecords for me",
					"description": "Create new navigation property to attendanceRecords for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports/{{$parameter[\"meetingAttendanceReport-id\"]}}/attendanceRecords"
						}
					}
				},
				{
					"name": "Me Online Meetings Attendance Reports Delete Attendance Records",
					"value": "Me Online Meetings Attendance Reports Delete Attendance Records",
					"action": "Delete navigation property attendanceRecords for me",
					"description": "Delete navigation property attendanceRecords for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports/{{$parameter[\"meetingAttendanceReport-id\"]}}/attendanceRecords/{{$parameter[\"attendanceRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Me Online Meetings Attendance Reports Get Attendance Records",
					"value": "Me Online Meetings Attendance Reports Get Attendance Records",
					"action": "Get attendanceRecords from me",
					"description": "List of attendance records of an attendance report. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports/{{$parameter[\"meetingAttendanceReport-id\"]}}/attendanceRecords/{{$parameter[\"attendanceRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Me Online Meetings Attendance Reports Update Attendance Records",
					"value": "Me Online Meetings Attendance Reports Update Attendance Records",
					"action": "Update the navigation property attendanceRecords in me",
					"description": "Update the navigation property attendanceRecords in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendanceReports/{{$parameter[\"meetingAttendanceReport-id\"]}}/attendanceRecords/{{$parameter[\"attendanceRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Me Get Online Meetings Attendee Report",
					"value": "Me Get Online Meetings Attendee Report",
					"action": "Get attendeeReport for the navigation property onlineMeetings from me",
					"description": "The content stream of the attendee report of a Teams live event. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendeeReport"
						}
					}
				},
				{
					"name": "Me Update Online Meetings Attendee Report",
					"value": "Me Update Online Meetings Attendee Report",
					"action": "Update attendeeReport for the navigation property onlineMeetings in me",
					"description": "The content stream of the attendee report of a Teams live event. Read-only.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/attendeeReport"
						}
					}
				},
				{
					"name": "Me Online Meetings Delete Meeting Attendance Report",
					"value": "Me Online Meetings Delete Meeting Attendance Report",
					"action": "Delete navigation property meetingAttendanceReport for me",
					"description": "Delete navigation property meetingAttendanceReport for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/meetingAttendanceReport"
						}
					}
				},
				{
					"name": "Me Online Meetings Get Meeting Attendance Report",
					"value": "Me Online Meetings Get Meeting Attendance Report",
					"action": "Get meetingAttendanceReport",
					"description": "Get the meetingAttendanceReport for an onlineMeeting. Each time an online meeting ends, an attendance report will be generated for that session.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/meetingAttendanceReport"
						}
					}
				},
				{
					"name": "Me Online Meetings Update Meeting Attendance Report",
					"value": "Me Online Meetings Update Meeting Attendance Report",
					"action": "Update the navigation property meetingAttendanceReport in me",
					"description": "Update the navigation property meetingAttendanceReport in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/meetingAttendanceReport"
						}
					}
				},
				{
					"name": "Me Online Meetings Meeting Attendance Report List Attendance Records",
					"value": "Me Online Meetings Meeting Attendance Report List Attendance Records",
					"action": "List attendanceRecords",
					"description": "Get a list of attendanceRecord objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/meetingAttendanceReport/attendanceRecords"
						}
					}
				},
				{
					"name": "Me Online Meetings Meeting Attendance Report Create Attendance Records",
					"value": "Me Online Meetings Meeting Attendance Report Create Attendance Records",
					"action": "Create new navigation property to attendanceRecords for me",
					"description": "Create new navigation property to attendanceRecords for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/meetingAttendanceReport/attendanceRecords"
						}
					}
				},
				{
					"name": "Me Online Meetings Meeting Attendance Report Delete Attendance Records",
					"value": "Me Online Meetings Meeting Attendance Report Delete Attendance Records",
					"action": "Delete navigation property attendanceRecords for me",
					"description": "Delete navigation property attendanceRecords for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/meetingAttendanceReport/attendanceRecords/{{$parameter[\"attendanceRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Me Online Meetings Meeting Attendance Report Get Attendance Records",
					"value": "Me Online Meetings Meeting Attendance Report Get Attendance Records",
					"action": "Get attendanceRecords from me",
					"description": "List of attendance records of an attendance report. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/meetingAttendanceReport/attendanceRecords/{{$parameter[\"attendanceRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Me Online Meetings Meeting Attendance Report Update Attendance Records",
					"value": "Me Online Meetings Meeting Attendance Report Update Attendance Records",
					"action": "Update the navigation property attendanceRecords in me",
					"description": "Update the navigation property attendanceRecords in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/meetingAttendanceReport/attendanceRecords/{{$parameter[\"attendanceRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Me Get Online Meetings Recording",
					"value": "Me Get Online Meetings Recording",
					"action": "Get recording for the navigation property onlineMeetings from me",
					"description": "The content stream of the recording of a Teams live event. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/recording"
						}
					}
				},
				{
					"name": "Me Update Online Meetings Recording",
					"value": "Me Update Online Meetings Recording",
					"action": "Update recording for the navigation property onlineMeetings in me",
					"description": "The content stream of the recording of a Teams live event. Read-only.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/recording"
						}
					}
				},
				{
					"name": "Me Online Meetings Delete Registration",
					"value": "Me Online Meetings Delete Registration",
					"action": "Delete externalMeetingRegistration",
					"description": "Disable and delete the externalMeetingRegistration of an onlineMeeting.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/registration"
						}
					}
				},
				{
					"name": "Me Online Meetings Get Registration",
					"value": "Me Online Meetings Get Registration",
					"action": "Get externalMeetingRegistration",
					"description": "Get the externalMeetingRegistration details associated with an onlineMeeting.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/registration"
						}
					}
				},
				{
					"name": "Me Online Meetings Update Registration",
					"value": "Me Online Meetings Update Registration",
					"action": "Update meetingRegistration",
					"description": "Update the details of a meetingRegistration object assciated with an onlineMeeting on behalf of the organizer.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/registration"
						}
					}
				},
				{
					"name": "Me Online Meetings Registration List Custom Questions",
					"value": "Me Online Meetings Registration List Custom Questions",
					"action": "List customQuestions",
					"description": "Get a list of the custom registration questions associated with a meetingRegistration object on behalf of the organizer.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/registration/customQuestions"
						}
					}
				},
				{
					"name": "Me Online Meetings Registration Create Custom Questions",
					"value": "Me Online Meetings Registration Create Custom Questions",
					"action": "Create meetingRegistrationQuestion",
					"description": "Create a custom registration question associated with a meetingRegistration object on behalf of the organizer.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/registration/customQuestions"
						}
					}
				},
				{
					"name": "Me Online Meetings Registration Delete Custom Questions",
					"value": "Me Online Meetings Registration Delete Custom Questions",
					"action": "Delete navigation property customQuestions for me",
					"description": "Delete navigation property customQuestions for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/registration/customQuestions/{{$parameter[\"meetingRegistrationQuestion-id\"]}}"
						}
					}
				},
				{
					"name": "Me Online Meetings Registration Get Custom Questions",
					"value": "Me Online Meetings Registration Get Custom Questions",
					"action": "Get customQuestions from me",
					"description": "Custom registration questions.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/registration/customQuestions/{{$parameter[\"meetingRegistrationQuestion-id\"]}}"
						}
					}
				},
				{
					"name": "Me Online Meetings Registration Update Custom Questions",
					"value": "Me Online Meetings Registration Update Custom Questions",
					"action": "Update the navigation property customQuestions in me",
					"description": "Update the navigation property customQuestions in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/registration/customQuestions/{{$parameter[\"meetingRegistrationQuestion-id\"]}}"
						}
					}
				},
				{
					"name": "Me Online Meetings List Transcripts",
					"value": "Me Online Meetings List Transcripts",
					"action": "List transcripts",
					"description": "Retrieve the list of callTranscript objects associated with an onlineMeeting.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/transcripts"
						}
					}
				},
				{
					"name": "Me Online Meetings Create Transcripts",
					"value": "Me Online Meetings Create Transcripts",
					"action": "Create new navigation property to transcripts for me",
					"description": "Create new navigation property to transcripts for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/transcripts"
						}
					}
				},
				{
					"name": "Me Online Meetings Delete Transcripts",
					"value": "Me Online Meetings Delete Transcripts",
					"action": "Delete navigation property transcripts for me",
					"description": "Delete navigation property transcripts for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/transcripts/{{$parameter[\"callTranscript-id\"]}}"
						}
					}
				},
				{
					"name": "Me Online Meetings Get Transcripts",
					"value": "Me Online Meetings Get Transcripts",
					"action": "Get transcripts from me",
					"description": "The transcripts of an online meeting. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/transcripts/{{$parameter[\"callTranscript-id\"]}}"
						}
					}
				},
				{
					"name": "Me Online Meetings Update Transcripts",
					"value": "Me Online Meetings Update Transcripts",
					"action": "Update the navigation property transcripts in me",
					"description": "Update the navigation property transcripts in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/transcripts/{{$parameter[\"callTranscript-id\"]}}"
						}
					}
				},
				{
					"name": "Me Online Meetings Get Transcripts Content",
					"value": "Me Online Meetings Get Transcripts Content",
					"action": "Get content for the navigation property transcripts from me",
					"description": "A field that represents the content of the transcript. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/transcripts/{{$parameter[\"callTranscript-id\"]}}/content"
						}
					}
				},
				{
					"name": "Me Online Meetings Update Transcripts Content",
					"value": "Me Online Meetings Update Transcripts Content",
					"action": "Update content for the navigation property transcripts in me",
					"description": "A field that represents the content of the transcript. Read-only.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/transcripts/{{$parameter[\"callTranscript-id\"]}}/content"
						}
					}
				},
				{
					"name": "Me Online Meetings Delete Virtual Appointment",
					"value": "Me Online Meetings Delete Virtual Appointment",
					"action": "Delete navigation property virtualAppointment for me",
					"description": "Delete navigation property virtualAppointment for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/virtualAppointment"
						}
					}
				},
				{
					"name": "Me Online Meetings Get Virtual Appointment",
					"value": "Me Online Meetings Get Virtual Appointment",
					"action": "Get virtualAppointment from me",
					"description": "Get virtualAppointment from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/virtualAppointment"
						}
					}
				},
				{
					"name": "Me Online Meetings Update Virtual Appointment",
					"value": "Me Online Meetings Update Virtual Appointment",
					"action": "Update the navigation property virtualAppointment in me",
					"description": "Update the navigation property virtualAppointment in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/onlineMeetings/{{$parameter[\"onlineMeeting-id\"]}}/virtualAppointment"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me/onlineMeetings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me List Online Meetings"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me List Online Meetings"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me List Online Meetings"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me List Online Meetings"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me List Online Meetings"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me List Online Meetings"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me List Online Meetings"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me List Online Meetings"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me List Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onlineMeetings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Create Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onlineMeetings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Create Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/onlineMeetings/{onlineMeeting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Delete Online Meetings"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Delete Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onlineMeetings/{onlineMeeting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Get Online Meetings"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Get Online Meetings"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Get Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onlineMeetings/{onlineMeeting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Update Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onlineMeetings/{onlineMeeting-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Update Online Meetings"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Get Online Meetings Alternative Recording"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Update Online Meetings Alternative Recording"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/onlineMeetings/{onlineMeeting-id}/alternativeRecording<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Update Online Meetings Alternative Recording"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onlineMeetings/{onlineMeeting-id}/attendanceReports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings List Attendance Reports"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings List Attendance Reports"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings List Attendance Reports"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings List Attendance Reports"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings List Attendance Reports"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings List Attendance Reports"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings List Attendance Reports"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings List Attendance Reports"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings List Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onlineMeetings/{onlineMeeting-id}/attendanceReports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Create Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onlineMeetings/{onlineMeeting-id}/attendanceReports<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Create Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Delete Attendance Reports"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Delete Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Get Attendance Reports"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Get Attendance Reports"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Get Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Update Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Update Attendance Reports"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Attendance Reports List Attendance Records"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Attendance Reports List Attendance Records"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Attendance Reports List Attendance Records"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Attendance Reports List Attendance Records"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Attendance Reports List Attendance Records"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Attendance Reports List Attendance Records"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Attendance Reports List Attendance Records"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Attendance Reports List Attendance Records"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Attendance Reports List Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Attendance Reports Create Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Attendance Reports Create Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Attendance Reports Delete Attendance Records"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Attendance Reports Delete Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Attendance Reports Get Attendance Records"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Attendance Reports Get Attendance Records"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Attendance Reports Get Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Attendance Reports Update Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onlineMeetings/{onlineMeeting-id}/attendanceReports/{meetingAttendanceReport-id}/attendanceRecords/{attendanceRecord-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Attendance Reports Update Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onlineMeetings/{onlineMeeting-id}/attendeeReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Get Online Meetings Attendee Report"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/onlineMeetings/{onlineMeeting-id}/attendeeReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Update Online Meetings Attendee Report"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/onlineMeetings/{onlineMeeting-id}/attendeeReport<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Update Online Meetings Attendee Report"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Delete Meeting Attendance Report"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Delete Meeting Attendance Report"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Get Meeting Attendance Report"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Get Meeting Attendance Report"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Get Meeting Attendance Report"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Update Meeting Attendance Report"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Update Meeting Attendance Report"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Meeting Attendance Report List Attendance Records"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Meeting Attendance Report List Attendance Records"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Meeting Attendance Report List Attendance Records"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Meeting Attendance Report List Attendance Records"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Meeting Attendance Report List Attendance Records"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Meeting Attendance Report List Attendance Records"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Meeting Attendance Report List Attendance Records"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Meeting Attendance Report List Attendance Records"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Meeting Attendance Report List Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Meeting Attendance Report Create Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Meeting Attendance Report Create Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Meeting Attendance Report Delete Attendance Records"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Meeting Attendance Report Delete Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Meeting Attendance Report Get Attendance Records"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Meeting Attendance Report Get Attendance Records"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Meeting Attendance Report Get Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Meeting Attendance Report Update Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onlineMeetings/{onlineMeeting-id}/meetingAttendanceReport/attendanceRecords/{attendanceRecord-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Meeting Attendance Report Update Attendance Records"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onlineMeetings/{onlineMeeting-id}/recording",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Get Online Meetings Recording"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/onlineMeetings/{onlineMeeting-id}/recording",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Update Online Meetings Recording"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/onlineMeetings/{onlineMeeting-id}/recording<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Update Online Meetings Recording"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/onlineMeetings/{onlineMeeting-id}/registration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Delete Registration"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Delete Registration"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onlineMeetings/{onlineMeeting-id}/registration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Get Registration"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Get Registration"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Get Registration"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onlineMeetings/{onlineMeeting-id}/registration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Update Registration"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onlineMeetings/{onlineMeeting-id}/registration<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Update Registration"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Registration List Custom Questions"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Registration List Custom Questions"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Registration List Custom Questions"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Registration List Custom Questions"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Registration List Custom Questions"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Registration List Custom Questions"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Registration List Custom Questions"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Registration List Custom Questions"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Registration List Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Registration Create Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Registration Create Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Registration Delete Custom Questions"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Registration Delete Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Registration Get Custom Questions"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Registration Get Custom Questions"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Registration Get Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Registration Update Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onlineMeetings/{onlineMeeting-id}/registration/customQuestions/{meetingRegistrationQuestion-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Registration Update Custom Questions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onlineMeetings/{onlineMeeting-id}/transcripts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings List Transcripts"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings List Transcripts"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings List Transcripts"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings List Transcripts"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings List Transcripts"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings List Transcripts"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings List Transcripts"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings List Transcripts"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings List Transcripts"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onlineMeetings/{onlineMeeting-id}/transcripts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Create Transcripts"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onlineMeetings/{onlineMeeting-id}/transcripts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Create Transcripts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Delete Transcripts"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Delete Transcripts"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Get Transcripts"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Get Transcripts"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Get Transcripts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Update Transcripts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Update Transcripts"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Get Transcripts Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Update Transcripts Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Update Transcripts Content"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/onlineMeetings/{onlineMeeting-id}/virtualAppointment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Delete Virtual Appointment"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Delete Virtual Appointment"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onlineMeetings/{onlineMeeting-id}/virtualAppointment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Get Virtual Appointment"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Get Virtual Appointment"
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
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Get Virtual Appointment"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onlineMeetings/{onlineMeeting-id}/virtualAppointment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Update Virtual Appointment"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onlineMeetings/{onlineMeeting-id}/virtualAppointment<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Online Meeting"
					],
					"operation": [
						"Me Online Meetings Update Virtual Appointment"
					]
				}
			}
		},
];
