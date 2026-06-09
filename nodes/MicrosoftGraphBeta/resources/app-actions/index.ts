import type { INodeProperties } from 'n8n-workflow';

export const appActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					]
				}
			},
			"options": [
				{
					"name": "App Calls Log Teleconference Device Quality",
					"value": "App Calls Log Teleconference Device Quality",
					"action": "Invoke action logTeleconferenceDeviceQuality",
					"description": "Log video teleconferencing device quality data. The Cloud Video Interop (CVI) bot represents video teleconferencing (VTC) devices and acts as a back-to-back agent for a VTC device in a conference call. Because a CVI bot is in the middle of the VTC and Microsoft Teams infrastructure as a VTC proxy, it has two media legs. One media leg is between the CVI bot and Teams infrastructure, such as Teams conference server or a Teams client. The other media leg is between the CVI bot and the VTC device.  The third-party partners own the VTC media leg and the Teams infrastructure cannot access the quality data of the third-party call leg.  This method is only for the CVI partners to provide their media quality data.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/microsoft.graph.logTeleconferenceDeviceQuality"
						}
					}
				},
				{
					"name": "App Calls Call Add Large Gallery View",
					"value": "App Calls Call Add Large Gallery View",
					"action": "Invoke action addLargeGalleryView",
					"description": "Add the large gallery view to a call.  For details about how to identify a large gallery view participant in a roster so that you can retrieve the relevant data to subscribe to the video feed, see Identify large gallery view participants in a roster.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.addLargeGalleryView"
						}
					}
				},
				{
					"name": "App Calls Call Answer",
					"value": "App Calls Call Answer",
					"action": "Invoke action answer",
					"description": "Enable a bot to answer an incoming call. The incoming call request can be an invite from a participant in a group call or a peer-to-peer call. If an invite to a group call is received, the notification will contain the chatInfo and meetingInfo parameters. The bot is expected to answer, reject or redirect the call before the call times out. The current timeout value is 15 seconds. The current timeout value is 15 seconds for regular scenarios, and 5 seconds for policy-based recording scenarios.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.answer"
						}
					}
				},
				{
					"name": "App Calls Call Cancel Media Processing",
					"value": "App Calls Call Cancel Media Processing",
					"action": "Invoke action cancelMediaProcessing",
					"description": "Cancels processing for any in-progress media operations. Media operations refer to the IVR operations playPrompt and recordResponse, which are by default queued to process in order. The **cancelMediaProcessing** method cancels any operation that is in-process as well as operations that are queued. For example, this API can be used to clean up the IVR operation queue for a new media operation. However, it will not cancel a **ubscribeToTone** operation because it operates independent of any operation queue.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.cancelMediaProcessing"
						}
					}
				},
				{
					"name": "App Calls Call Change Screen Sharing Role",
					"value": "App Calls Call Change Screen Sharing Role",
					"action": "Invoke action changeScreenSharingRole",
					"description": "Allow applications to share screen content with the participants of a group call.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.changeScreenSharingRole"
						}
					}
				},
				{
					"name": "App Calls Call Keep Alive",
					"value": "App Calls Call Keep Alive",
					"action": "Invoke action keepAlive",
					"description": "Make a request to this API every 15 to 45 minutes to ensure that an ongoing call remains active. A call that does not receive this request within 45 minutes is considered inactive and will subsequently end. At least one successful request must be made within 45 minutes of the previous request, or the start of the call. We recommend that you send a request in shorter time intervals (every 15 minutes). Make sure that these requests are successful to prevent the call from timing out and ending. Attempting to send a request to a call that has already ended will result in a `404 Not-Found` error. The resources related to the call should be cleaned up on the application side.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.keepAlive"
						}
					}
				},
				{
					"name": "App Calls Call Mute",
					"value": "App Calls Call Mute",
					"action": "Invoke action mute",
					"description": "Allows the application to mute itself. This is a server mute, meaning that the server will drop all audio packets for this participant, even if the participant continues to stream audio. For more details about how to handle mute operations, see muteParticipantOperation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.mute"
						}
					}
				},
				{
					"name": "App Calls Call Play Prompt",
					"value": "App Calls Call Play Prompt",
					"action": "Invoke action playPrompt",
					"description": "Play a prompt in the call. For more information about how to handle operations, see commsOperation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.playPrompt"
						}
					}
				},
				{
					"name": "App Calls Call Record",
					"value": "App Calls Call Record",
					"action": "Invoke action record",
					"description": "Invoke action record",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.record"
						}
					}
				},
				{
					"name": "App Calls Call Record Response",
					"value": "App Calls Call Record Response",
					"action": "Invoke action recordResponse",
					"description": "Record a short audio response from the caller. A bot can use this to capture a voice response from a caller after they are prompted for a response. For more information about how to handle operations, see commsOperation This action is not intended to record the entire call. The maximum length of recording is 2 minutes. The recording is not saved permanently by the by the Cloud Communications Platform and is discarded shortly after the call ends. The bot must download the recording promptly after the recording operation finishes by using the recordingLocation value that's given in the completed notification.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.recordResponse"
						}
					}
				},
				{
					"name": "App Calls Call Redirect",
					"value": "App Calls Call Redirect",
					"action": "Invoke action redirect",
					"description": "Redirect an incoming call that hasn't been answered or rejected yet. The terms 'redirecting' and 'forwarding' a call are used interchangeably. The bot is expected to redirect the call before the call times out. The current timeout value is 15 seconds.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.redirect"
						}
					}
				},
				{
					"name": "App Calls Call Reject",
					"value": "App Calls Call Reject",
					"action": "Invoke action reject",
					"description": "Enable a bot to reject an incoming call. The incoming call request can be an invite from a participant in a group call or a peer-to-peer call. If an invite to a group call is received, the notification will contain the **chatInfo** and **meetingInfo** parameters. The bot is expected to answer or reject the call before the call times out. The current timeout value is 15 seconds. This API does not end existing calls that have already been answered. Use delete call to end a call.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.reject"
						}
					}
				},
				{
					"name": "App Calls Call Subscribe To Tone",
					"value": "App Calls Call Subscribe To Tone",
					"action": "Invoke action subscribeToTone",
					"description": "Subscribe to DTMF (dual-tone multi-frequency signaling). This allows you to be notified when the user presses keys on a 'Dialpad'.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.subscribeToTone"
						}
					}
				},
				{
					"name": "App Calls Call Transfer",
					"value": "App Calls Call Transfer",
					"action": "Invoke action transfer",
					"description": "Transfer an active peer-to-peer call or group call. A consultative transfer means that the transferor can inform the person they want to transfer the call to (the transferee), before the transfer is made. This is opposed to transfering the call directly.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.transfer"
						}
					}
				},
				{
					"name": "App Calls Call Unmute",
					"value": "App Calls Call Unmute",
					"action": "Invoke action unmute",
					"description": "Allow the application to unmute itself. This is a server unmute, meaning that the server will start sending audio packets for this participant to other participants again. For more information about how to handle unmute operations, see unmuteParticipantOperation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.unmute"
						}
					}
				},
				{
					"name": "App Calls Call Update Recording Status",
					"value": "App Calls Call Update Recording Status",
					"action": "Invoke action updateRecordingStatus",
					"description": "Update the application's recording status associated with a call. This requires the use of the Teams policy-based recording solution.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.updateRecordingStatus"
						}
					}
				},
				{
					"name": "App Calls Call Participants Invite",
					"value": "App Calls Call Participants Invite",
					"action": "Invoke action invite",
					"description": "Delete a specific participant in a call. In some situations, it is appropriate for an application to remove a participant from an active call. This action can be done before or after the participant answers the call. When an active caller is removed, they are immediately dropped from the call with no pre- or post-removal notification. When an invited participant is removed, any outstanding add participant request is canceled.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/participants/microsoft.graph.invite"
						}
					}
				},
				{
					"name": "App Calls Call Participants Mute All",
					"value": "App Calls Call Participants Mute All",
					"action": "Invoke action muteAll",
					"description": "Mute all participants in the call.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/participants/microsoft.graph.muteAll"
						}
					}
				},
				{
					"name": "App Calls Call Participants Participant Mute",
					"value": "App Calls Call Participants Participant Mute",
					"action": "Invoke action mute",
					"description": "Mute a specific participant in the call. This is a server mute, meaning that the server will drop all audio packets for this participant, even if the participant continues to stream audio. For more information about how to handle mute operations, see muteParticipantOperation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/participants/{{$parameter[\"participant-id\"]}}/microsoft.graph.mute"
						}
					}
				},
				{
					"name": "App Calls Call Participants Participant Start Hold Music",
					"value": "App Calls Call Participants Participant Start Hold Music",
					"action": "Invoke action startHoldMusic",
					"description": "Put a participant on hold and play music in the background.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/participants/{{$parameter[\"participant-id\"]}}/microsoft.graph.startHoldMusic"
						}
					}
				},
				{
					"name": "App Calls Call Participants Participant Stop Hold Music",
					"value": "App Calls Call Participants Participant Stop Hold Music",
					"action": "Invoke action stopHoldMusic",
					"description": "Reincorporate a participant previously put on hold to the call.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/participants/{{$parameter[\"participant-id\"]}}/microsoft.graph.stopHoldMusic"
						}
					}
				},
				{
					"name": "App Online Meetings Create Or Get",
					"value": "App Online Meetings Create Or Get",
					"action": "Invoke action createOrGet",
					"description": "Create an onlineMeeting object with a custom specified external ID. If the external ID already exists, this API will return the onlineMeeting object with that external ID. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/onlineMeetings/microsoft.graph.createOrGet"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /app/calls/microsoft.graph.logTeleconferenceDeviceQuality",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Log Teleconference Device Quality"
					]
				}
			}
		},
		{
			"displayName": "Quality",
			"name": "quality",
			"type": "json",
			"default": "{\n  \"mediaQualityList\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "quality",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Log Teleconference Device Quality"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/microsoft.graph.addLargeGalleryView",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Add Large Gallery View"
					]
				}
			}
		},
		{
			"displayName": "Client Context",
			"name": "clientContext",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "clientContext",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Add Large Gallery View"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/microsoft.graph.answer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Answer"
					]
				}
			}
		},
		{
			"displayName": "Accepted Modalities",
			"name": "acceptedModalities",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "acceptedModalities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Answer"
					]
				}
			}
		},
		{
			"displayName": "Call Options",
			"name": "callOptions",
			"type": "string",
			"default": {
				"@odata.type": "#microsoft.graph.incomingCallOptions"
			},
			"routing": {
				"send": {
					"property": "callOptions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Answer"
					]
				}
			}
		},
		{
			"displayName": "Callback Uri",
			"name": "callbackUri",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "callbackUri",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Answer"
					]
				}
			}
		},
		{
			"displayName": "Media Config",
			"name": "mediaConfig",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "mediaConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Answer"
					]
				}
			}
		},
		{
			"displayName": "Participant Capacity",
			"name": "participantCapacity",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "participantCapacity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Answer"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/microsoft.graph.cancelMediaProcessing",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Cancel Media Processing"
					]
				}
			}
		},
		{
			"displayName": "Client Context",
			"name": "clientContext",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "clientContext",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Cancel Media Processing"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/microsoft.graph.changeScreenSharingRole",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Change Screen Sharing Role"
					]
				}
			}
		},
		{
			"displayName": "Role",
			"name": "role",
			"type": "options",
			"default": "viewer",
			"options": [
				{
					"name": "Viewer",
					"value": "viewer"
				},
				{
					"name": "Sharer",
					"value": "sharer"
				}
			],
			"routing": {
				"send": {
					"property": "role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Change Screen Sharing Role"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/microsoft.graph.keepAlive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Keep Alive"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/microsoft.graph.mute",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Mute"
					]
				}
			}
		},
		{
			"displayName": "Client Context",
			"name": "clientContext",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "clientContext",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Mute"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/microsoft.graph.playPrompt",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Play Prompt"
					]
				}
			}
		},
		{
			"displayName": "Client Context",
			"name": "clientContext",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "clientContext",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Play Prompt"
					]
				}
			}
		},
		{
			"displayName": "Loop",
			"name": "loop",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "loop",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Play Prompt"
					]
				}
			}
		},
		{
			"displayName": "Prompts",
			"name": "prompts",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "prompts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Play Prompt"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/microsoft.graph.record",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Record"
					]
				}
			}
		},
		{
			"displayName": "Barge In Allowed",
			"name": "bargeInAllowed",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "bargeInAllowed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Record"
					]
				}
			}
		},
		{
			"displayName": "Client Context",
			"name": "clientContext",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "clientContext",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Record"
					]
				}
			}
		},
		{
			"displayName": "Initial Silence Timeout In Seconds",
			"name": "initialSilenceTimeoutInSeconds",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "initialSilenceTimeoutInSeconds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Record"
					]
				}
			}
		},
		{
			"displayName": "Max Record Duration In Seconds",
			"name": "maxRecordDurationInSeconds",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "maxRecordDurationInSeconds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Record"
					]
				}
			}
		},
		{
			"displayName": "Max Silence Timeout In Seconds",
			"name": "maxSilenceTimeoutInSeconds",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "maxSilenceTimeoutInSeconds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Record"
					]
				}
			}
		},
		{
			"displayName": "Play Beep",
			"name": "playBeep",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "playBeep",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Record"
					]
				}
			}
		},
		{
			"displayName": "Prompts",
			"name": "prompts",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "prompts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Record"
					]
				}
			}
		},
		{
			"displayName": "Stop Tones",
			"name": "stopTones",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "stopTones",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Record"
					]
				}
			}
		},
		{
			"displayName": "Stream While Recording",
			"name": "streamWhileRecording",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "streamWhileRecording",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Record"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/microsoft.graph.recordResponse",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Record Response"
					]
				}
			}
		},
		{
			"displayName": "Barge In Allowed",
			"name": "bargeInAllowed",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "bargeInAllowed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Record Response"
					]
				}
			}
		},
		{
			"displayName": "Client Context",
			"name": "clientContext",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "clientContext",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Record Response"
					]
				}
			}
		},
		{
			"displayName": "Initial Silence Timeout In Seconds",
			"name": "initialSilenceTimeoutInSeconds",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "initialSilenceTimeoutInSeconds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Record Response"
					]
				}
			}
		},
		{
			"displayName": "Max Record Duration In Seconds",
			"name": "maxRecordDurationInSeconds",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "maxRecordDurationInSeconds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Record Response"
					]
				}
			}
		},
		{
			"displayName": "Max Silence Timeout In Seconds",
			"name": "maxSilenceTimeoutInSeconds",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "maxSilenceTimeoutInSeconds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Record Response"
					]
				}
			}
		},
		{
			"displayName": "Play Beep",
			"name": "playBeep",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "playBeep",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Record Response"
					]
				}
			}
		},
		{
			"displayName": "Prompts",
			"name": "prompts",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "prompts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Record Response"
					]
				}
			}
		},
		{
			"displayName": "Stop Tones",
			"name": "stopTones",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "stopTones",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Record Response"
					]
				}
			}
		},
		{
			"displayName": "Stream While Recording",
			"name": "streamWhileRecording",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "streamWhileRecording",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Record Response"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/microsoft.graph.redirect",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Redirect"
					]
				}
			}
		},
		{
			"displayName": "Callback Uri",
			"name": "callbackUri",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "callbackUri",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Redirect"
					]
				}
			}
		},
		{
			"displayName": "Mask Callee",
			"name": "maskCallee",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "maskCallee",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Redirect"
					]
				}
			}
		},
		{
			"displayName": "Mask Caller",
			"name": "maskCaller",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "maskCaller",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Redirect"
					]
				}
			}
		},
		{
			"displayName": "Target Disposition",
			"name": "targetDisposition",
			"type": "options",
			"default": "default",
			"options": [
				{
					"name": "Default",
					"value": "default"
				},
				{
					"name": "Simultaneous Ring",
					"value": "simultaneousRing"
				},
				{
					"name": "Forward",
					"value": "forward"
				}
			],
			"routing": {
				"send": {
					"property": "targetDisposition",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Redirect"
					]
				}
			}
		},
		{
			"displayName": "Targets",
			"name": "targets",
			"type": "json",
			"default": "[\n  {\n    \"identity\": {\n      \"application\": {},\n      \"device\": {},\n      \"user\": {}\n    }\n  }\n]",
			"routing": {
				"send": {
					"property": "targets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Redirect"
					]
				}
			}
		},
		{
			"displayName": "Timeout",
			"name": "timeout",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "timeout",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Redirect"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/microsoft.graph.reject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Reject"
					]
				}
			}
		},
		{
			"displayName": "Callback Uri",
			"name": "callbackUri",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "callbackUri",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Reject"
					]
				}
			}
		},
		{
			"displayName": "Reason",
			"name": "reason",
			"type": "options",
			"default": "none",
			"options": [
				{
					"name": "None",
					"value": "none"
				},
				{
					"name": "Busy",
					"value": "busy"
				},
				{
					"name": "Forbidden",
					"value": "forbidden"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"routing": {
				"send": {
					"property": "reason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Reject"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/microsoft.graph.subscribeToTone",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Subscribe To Tone"
					]
				}
			}
		},
		{
			"displayName": "Client Context",
			"name": "clientContext",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "clientContext",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Subscribe To Tone"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/microsoft.graph.transfer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Transfer"
					]
				}
			}
		},
		{
			"displayName": "Transfer Target",
			"name": "transferTarget",
			"type": "json",
			"default": "{\n  \"identity\": {\n    \"application\": {},\n    \"device\": {},\n    \"user\": {}\n  }\n}",
			"routing": {
				"send": {
					"property": "transferTarget",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Transfer"
					]
				}
			}
		},
		{
			"displayName": "Transferee",
			"name": "transferee",
			"type": "json",
			"default": "{\n  \"identity\": {\n    \"application\": {},\n    \"device\": {},\n    \"user\": {}\n  },\n  \"nonAnonymizedIdentity\": {}\n}",
			"routing": {
				"send": {
					"property": "transferee",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Transfer"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/microsoft.graph.unmute",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Unmute"
					]
				}
			}
		},
		{
			"displayName": "Client Context",
			"name": "clientContext",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "clientContext",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Unmute"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/microsoft.graph.updateRecordingStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Update Recording Status"
					]
				}
			}
		},
		{
			"displayName": "Client Context",
			"name": "clientContext",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "clientContext",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Update Recording Status"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "unknown",
			"options": [
				{
					"name": "Unknown",
					"value": "unknown"
				},
				{
					"name": "Not Recording",
					"value": "notRecording"
				},
				{
					"name": "Recording",
					"value": "recording"
				},
				{
					"name": "Failed",
					"value": "failed"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Update Recording Status"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/participants/microsoft.graph.invite",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Participants Invite"
					]
				}
			}
		},
		{
			"displayName": "Client Context",
			"name": "clientContext",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "clientContext",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Participants Invite"
					]
				}
			}
		},
		{
			"displayName": "Participants",
			"name": "participants",
			"type": "json",
			"default": "[\n  {\n    \"identity\": {\n      \"application\": {},\n      \"device\": {},\n      \"user\": {}\n    }\n  }\n]",
			"routing": {
				"send": {
					"property": "participants",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Participants Invite"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/participants/microsoft.graph.muteAll",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Participants Mute All"
					]
				}
			}
		},
		{
			"displayName": "Client Context",
			"name": "clientContext",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "clientContext",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Participants Mute All"
					]
				}
			}
		},
		{
			"displayName": "Participants",
			"name": "participants",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "participants",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Participants Mute All"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/participants/{participant-id}/microsoft.graph.mute",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Participants Participant Mute"
					]
				}
			}
		},
		{
			"displayName": "Client Context",
			"name": "clientContext",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "clientContext",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Participants Participant Mute"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/participants/{participant-id}/microsoft.graph.startHoldMusic",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Participants Participant Start Hold Music"
					]
				}
			}
		},
		{
			"displayName": "Client Context",
			"name": "clientContext",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "clientContext",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Participants Participant Start Hold Music"
					]
				}
			}
		},
		{
			"displayName": "Custom Prompt",
			"name": "customPrompt",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "customPrompt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Participants Participant Start Hold Music"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/participants/{participant-id}/microsoft.graph.stopHoldMusic",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Participants Participant Stop Hold Music"
					]
				}
			}
		},
		{
			"displayName": "Client Context",
			"name": "clientContext",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "clientContext",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Calls Call Participants Participant Stop Hold Music"
					]
				}
			}
		},
		{
			"displayName": "POST /app/onlineMeetings/microsoft.graph.createOrGet",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Online Meetings Create Or Get"
					]
				}
			}
		},
		{
			"displayName": "Chat Info",
			"name": "chatInfo",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "chatInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Online Meetings Create Or Get"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "endDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Online Meetings Create Or Get"
					]
				}
			}
		},
		{
			"displayName": "External ID",
			"name": "externalId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "externalId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Online Meetings Create Or Get"
					]
				}
			}
		},
		{
			"displayName": "Participants",
			"name": "participants",
			"type": "json",
			"default": "{\n  \"attendees\": [\n    {\n      \"identity\": {\n        \"application\": {},\n        \"device\": {},\n        \"user\": {}\n      }\n    }\n  ],\n  \"contributors\": [\n    {}\n  ],\n  \"organizer\": {},\n  \"producers\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "participants",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Online Meetings Create Or Get"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "startDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Online Meetings Create Or Get"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "subject",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "subject",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"App Actions"
					],
					"operation": [
						"App Online Meetings Create Or Get"
					]
				}
			}
		},
];
