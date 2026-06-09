import type { INodeProperties } from 'n8n-workflow';

export const communicationsActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					]
				}
			},
			"options": [
				{
					"name": "Communications Calls Log Teleconference Device Quality",
					"value": "Communications Calls Log Teleconference Device Quality",
					"action": "Invoke action logTeleconferenceDeviceQuality",
					"description": "Log video teleconferencing device quality data. The Cloud Video Interop (CVI) bot represents video teleconferencing (VTC) devices and acts as a back-to-back agent for a VTC device in a conference call. Because a CVI bot is in the middle of the VTC and Microsoft Teams infrastructure as a VTC proxy, it has two media legs. One media leg is between the CVI bot and Teams infrastructure, such as Teams conference server or a Teams client. The other media leg is between the CVI bot and the VTC device.  The third-party partners own the VTC media leg and the Teams infrastructure cannot access the quality data of the third-party call leg.  This method is only for the CVI partners to provide their media quality data.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/microsoft.graph.logTeleconferenceDeviceQuality"
						}
					}
				},
				{
					"name": "Communications Calls Call Add Large Gallery View",
					"value": "Communications Calls Call Add Large Gallery View",
					"action": "Invoke action addLargeGalleryView",
					"description": "Add the large gallery view to a call.  For details about how to identify a large gallery view participant in a roster so that you can retrieve the relevant data to subscribe to the video feed, see Identify large gallery view participants in a roster.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.addLargeGalleryView"
						}
					}
				},
				{
					"name": "Communications Calls Call Answer",
					"value": "Communications Calls Call Answer",
					"action": "Invoke action answer",
					"description": "Enable a bot to answer an incoming call. The incoming call request can be an invite from a participant in a group call or a peer-to-peer call. If an invite to a group call is received, the notification will contain the chatInfo and meetingInfo parameters. The bot is expected to answer, reject or redirect the call before the call times out. The current timeout value is 15 seconds. The current timeout value is 15 seconds for regular scenarios, and 5 seconds for policy-based recording scenarios.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.answer"
						}
					}
				},
				{
					"name": "Communications Calls Call Cancel Media Processing",
					"value": "Communications Calls Call Cancel Media Processing",
					"action": "Invoke action cancelMediaProcessing",
					"description": "Cancels processing for any in-progress media operations. Media operations refer to the IVR operations playPrompt and recordResponse, which are by default queued to process in order. The **cancelMediaProcessing** method cancels any operation that is in-process as well as operations that are queued. For example, this API can be used to clean up the IVR operation queue for a new media operation. However, it will not cancel a **ubscribeToTone** operation because it operates independent of any operation queue.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.cancelMediaProcessing"
						}
					}
				},
				{
					"name": "Communications Calls Call Change Screen Sharing Role",
					"value": "Communications Calls Call Change Screen Sharing Role",
					"action": "Invoke action changeScreenSharingRole",
					"description": "Allow applications to share screen content with the participants of a group call.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.changeScreenSharingRole"
						}
					}
				},
				{
					"name": "Communications Calls Call Keep Alive",
					"value": "Communications Calls Call Keep Alive",
					"action": "Invoke action keepAlive",
					"description": "Make a request to this API every 15 to 45 minutes to ensure that an ongoing call remains active. A call that does not receive this request within 45 minutes is considered inactive and will subsequently end. At least one successful request must be made within 45 minutes of the previous request, or the start of the call. We recommend that you send a request in shorter time intervals (every 15 minutes). Make sure that these requests are successful to prevent the call from timing out and ending. Attempting to send a request to a call that has already ended will result in a `404 Not-Found` error. The resources related to the call should be cleaned up on the application side.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.keepAlive"
						}
					}
				},
				{
					"name": "Communications Calls Call Mute",
					"value": "Communications Calls Call Mute",
					"action": "Invoke action mute",
					"description": "Allows the application to mute itself. This is a server mute, meaning that the server will drop all audio packets for this participant, even if the participant continues to stream audio. For more details about how to handle mute operations, see muteParticipantOperation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.mute"
						}
					}
				},
				{
					"name": "Communications Calls Call Play Prompt",
					"value": "Communications Calls Call Play Prompt",
					"action": "Invoke action playPrompt",
					"description": "Play a prompt in the call. For more information about how to handle operations, see commsOperation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.playPrompt"
						}
					}
				},
				{
					"name": "Communications Calls Call Record",
					"value": "Communications Calls Call Record",
					"action": "Invoke action record",
					"description": "Invoke action record",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.record"
						}
					}
				},
				{
					"name": "Communications Calls Call Record Response",
					"value": "Communications Calls Call Record Response",
					"action": "Invoke action recordResponse",
					"description": "Record a short audio response from the caller. A bot can use this to capture a voice response from a caller after they are prompted for a response. For more information about how to handle operations, see commsOperation This action is not intended to record the entire call. The maximum length of recording is 2 minutes. The recording is not saved permanently by the by the Cloud Communications Platform and is discarded shortly after the call ends. The bot must download the recording promptly after the recording operation finishes by using the recordingLocation value that's given in the completed notification.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.recordResponse"
						}
					}
				},
				{
					"name": "Communications Calls Call Redirect",
					"value": "Communications Calls Call Redirect",
					"action": "Invoke action redirect",
					"description": "Redirect an incoming call that hasn't been answered or rejected yet. The terms 'redirecting' and 'forwarding' a call are used interchangeably. The bot is expected to redirect the call before the call times out. The current timeout value is 15 seconds.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.redirect"
						}
					}
				},
				{
					"name": "Communications Calls Call Reject",
					"value": "Communications Calls Call Reject",
					"action": "Invoke action reject",
					"description": "Enable a bot to reject an incoming call. The incoming call request can be an invite from a participant in a group call or a peer-to-peer call. If an invite to a group call is received, the notification will contain the **chatInfo** and **meetingInfo** parameters. The bot is expected to answer or reject the call before the call times out. The current timeout value is 15 seconds. This API does not end existing calls that have already been answered. Use delete call to end a call.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.reject"
						}
					}
				},
				{
					"name": "Communications Calls Call Subscribe To Tone",
					"value": "Communications Calls Call Subscribe To Tone",
					"action": "Invoke action subscribeToTone",
					"description": "Subscribe to DTMF (dual-tone multi-frequency signaling). This allows you to be notified when the user presses keys on a 'Dialpad'.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.subscribeToTone"
						}
					}
				},
				{
					"name": "Communications Calls Call Transfer",
					"value": "Communications Calls Call Transfer",
					"action": "Invoke action transfer",
					"description": "Transfer an active peer-to-peer call or group call. A consultative transfer means that the transferor can inform the person they want to transfer the call to (the transferee), before the transfer is made. This is opposed to transfering the call directly.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.transfer"
						}
					}
				},
				{
					"name": "Communications Calls Call Unmute",
					"value": "Communications Calls Call Unmute",
					"action": "Invoke action unmute",
					"description": "Allow the application to unmute itself. This is a server unmute, meaning that the server will start sending audio packets for this participant to other participants again. For more information about how to handle unmute operations, see unmuteParticipantOperation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.unmute"
						}
					}
				},
				{
					"name": "Communications Calls Call Update Recording Status",
					"value": "Communications Calls Call Update Recording Status",
					"action": "Invoke action updateRecordingStatus",
					"description": "Update the application's recording status associated with a call. This requires the use of the Teams policy-based recording solution.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/microsoft.graph.updateRecordingStatus"
						}
					}
				},
				{
					"name": "Communications Calls Call Participants Invite",
					"value": "Communications Calls Call Participants Invite",
					"action": "Invoke action invite",
					"description": "Delete a specific participant in a call. In some situations, it is appropriate for an application to remove a participant from an active call. This action can be done before or after the participant answers the call. When an active caller is removed, they are immediately dropped from the call with no pre- or post-removal notification. When an invited participant is removed, any outstanding add participant request is canceled.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/participants/microsoft.graph.invite"
						}
					}
				},
				{
					"name": "Communications Calls Call Participants Mute All",
					"value": "Communications Calls Call Participants Mute All",
					"action": "Invoke action muteAll",
					"description": "Mute all participants in the call.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/participants/microsoft.graph.muteAll"
						}
					}
				},
				{
					"name": "Communications Calls Call Participants Participant Mute",
					"value": "Communications Calls Call Participants Participant Mute",
					"action": "Invoke action mute",
					"description": "Mute a specific participant in the call. This is a server mute, meaning that the server will drop all audio packets for this participant, even if the participant continues to stream audio. For more information about how to handle mute operations, see muteParticipantOperation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/participants/{{$parameter[\"participant-id\"]}}/microsoft.graph.mute"
						}
					}
				},
				{
					"name": "Communications Calls Call Participants Participant Start Hold Music",
					"value": "Communications Calls Call Participants Participant Start Hold Music",
					"action": "Invoke action startHoldMusic",
					"description": "Put a participant on hold and play music in the background.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/participants/{{$parameter[\"participant-id\"]}}/microsoft.graph.startHoldMusic"
						}
					}
				},
				{
					"name": "Communications Calls Call Participants Participant Stop Hold Music",
					"value": "Communications Calls Call Participants Participant Stop Hold Music",
					"action": "Invoke action stopHoldMusic",
					"description": "Reincorporate a participant previously put on hold to the call.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/participants/{{$parameter[\"participant-id\"]}}/microsoft.graph.stopHoldMusic"
						}
					}
				},
				{
					"name": "Communications Get Presences By User ID",
					"value": "Communications Get Presences By User ID",
					"action": "Invoke action getPresencesByUserId",
					"description": "Get the presence information for multiple users.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/microsoft.graph.getPresencesByUserId"
						}
					}
				},
				{
					"name": "Communications Online Meetings Create Or Get",
					"value": "Communications Online Meetings Create Or Get",
					"action": "Invoke action createOrGet",
					"description": "Create an onlineMeeting object with a custom specified external ID. If the external ID already exists, this API will return the onlineMeeting object with that external ID. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/onlineMeetings/microsoft.graph.createOrGet"
						}
					}
				},
				{
					"name": "Communications Presences Presence Clear Presence",
					"value": "Communications Presences Presence Clear Presence",
					"action": "Invoke action clearPresence",
					"description": "Clear a presence session of an application for a user. If it is the user's only presence session, a successful **clearPresence** changes the user's presence to `Offline/Offline`. Read more about presence sessions and their time-out and expiration. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/presences/{{$parameter[\"presence-id\"]}}/microsoft.graph.clearPresence"
						}
					}
				},
				{
					"name": "Communications Presences Presence Clear User Preferred Presence",
					"value": "Communications Presences Presence Clear User Preferred Presence",
					"action": "Invoke action clearUserPreferredPresence",
					"description": "Clear the preferred availability and activity status for a user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/presences/{{$parameter[\"presence-id\"]}}/microsoft.graph.clearUserPreferredPresence"
						}
					}
				},
				{
					"name": "Communications Presences Presence Set Presence",
					"value": "Communications Presences Presence Set Presence",
					"action": "Invoke action setPresence",
					"description": "Set the availability and activity status in a presence session of an application for a user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/presences/{{$parameter[\"presence-id\"]}}/microsoft.graph.setPresence"
						}
					}
				},
				{
					"name": "Communications Presences Presence Set Status Message",
					"value": "Communications Presences Presence Set Status Message",
					"action": "Invoke action setStatusMessage",
					"description": "Set a presence status message for a user. An optional expiration date and time can be supplied.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/presences/{{$parameter[\"presence-id\"]}}/microsoft.graph.setStatusMessage"
						}
					}
				},
				{
					"name": "Communications Presences Presence Set User Preferred Presence",
					"value": "Communications Presences Presence Set User Preferred Presence",
					"action": "Invoke action setUserPreferredPresence",
					"description": "Set the preferred availability and activity status for a user. If the preferred presence of a user is set, the user's presence is the preferred presence. Preferred presence takes effect only when there is at least one presence session of the user. Otherwise, the user's presence stays as Offline. A presence session can be created as a result of a successful setPresence operation, or if the user is signed in on a Teams client.  Read more about presence sessions and their time-out and expiration. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/presences/{{$parameter[\"presence-id\"]}}/microsoft.graph.setUserPreferredPresence"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /communications/calls/microsoft.graph.logTeleconferenceDeviceQuality",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Log Teleconference Device Quality"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Log Teleconference Device Quality"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/microsoft.graph.addLargeGalleryView",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Add Large Gallery View"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Add Large Gallery View"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/microsoft.graph.answer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Answer"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Answer"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Answer"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Answer"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Answer"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Answer"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/microsoft.graph.cancelMediaProcessing",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Cancel Media Processing"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Cancel Media Processing"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/microsoft.graph.changeScreenSharingRole",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Change Screen Sharing Role"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Change Screen Sharing Role"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/microsoft.graph.keepAlive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Keep Alive"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/microsoft.graph.mute",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Mute"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Mute"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/microsoft.graph.playPrompt",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Play Prompt"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Play Prompt"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Play Prompt"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Play Prompt"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/microsoft.graph.record",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Record"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Record"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Record"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Record"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Record"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Record"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Record"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Record"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Record"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Record"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/microsoft.graph.recordResponse",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Record Response"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Record Response"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Record Response"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Record Response"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Record Response"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Record Response"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Record Response"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Record Response"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Record Response"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Record Response"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/microsoft.graph.redirect",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Redirect"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Redirect"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Redirect"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Redirect"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Redirect"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Redirect"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Redirect"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/microsoft.graph.reject",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Reject"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Reject"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Reject"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/microsoft.graph.subscribeToTone",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Subscribe To Tone"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Subscribe To Tone"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/microsoft.graph.transfer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Transfer"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Transfer"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Transfer"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/microsoft.graph.unmute",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Unmute"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Unmute"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/microsoft.graph.updateRecordingStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Update Recording Status"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Update Recording Status"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Update Recording Status"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/participants/microsoft.graph.invite",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Participants Invite"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Participants Invite"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Participants Invite"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/participants/microsoft.graph.muteAll",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Participants Mute All"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Participants Mute All"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Participants Mute All"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/participants/{participant-id}/microsoft.graph.mute",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Participants Participant Mute"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Participants Participant Mute"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/participants/{participant-id}/microsoft.graph.startHoldMusic",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Participants Participant Start Hold Music"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Participants Participant Start Hold Music"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Participants Participant Start Hold Music"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/participants/{participant-id}/microsoft.graph.stopHoldMusic",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Participants Participant Stop Hold Music"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Calls Call Participants Participant Stop Hold Music"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/microsoft.graph.getPresencesByUserId",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Get Presences By User ID"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Get Presences By User ID"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/onlineMeetings/microsoft.graph.createOrGet",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Online Meetings Create Or Get"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Online Meetings Create Or Get"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Online Meetings Create Or Get"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Online Meetings Create Or Get"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Online Meetings Create Or Get"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Online Meetings Create Or Get"
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
						"Communications Actions"
					],
					"operation": [
						"Communications Online Meetings Create Or Get"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/presences/{presence-id}/microsoft.graph.clearPresence",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Presences Presence Clear Presence"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Presences Presence Clear Presence"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/presences/{presence-id}/microsoft.graph.clearUserPreferredPresence",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Presences Presence Clear User Preferred Presence"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/presences/{presence-id}/microsoft.graph.setPresence",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Presences Presence Set Presence"
					]
				}
			}
		},
		{
			"displayName": "Activity",
			"name": "activity",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "activity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Presences Presence Set Presence"
					]
				}
			}
		},
		{
			"displayName": "Availability",
			"name": "availability",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "availability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Presences Presence Set Presence"
					]
				}
			}
		},
		{
			"displayName": "Expiration Duration",
			"name": "expirationDuration",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "expirationDuration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Presences Presence Set Presence"
					]
				}
			}
		},
		{
			"displayName": "Session ID",
			"name": "sessionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sessionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Presences Presence Set Presence"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/presences/{presence-id}/microsoft.graph.setStatusMessage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Presences Presence Set Status Message"
					]
				}
			}
		},
		{
			"displayName": "Status Message",
			"name": "statusMessage",
			"type": "json",
			"default": "{\n  \"expiryDateTime\": {},\n  \"message\": {}\n}",
			"routing": {
				"send": {
					"property": "statusMessage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Presences Presence Set Status Message"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/presences/{presence-id}/microsoft.graph.setUserPreferredPresence",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Presences Presence Set User Preferred Presence"
					]
				}
			}
		},
		{
			"displayName": "Activity",
			"name": "activity",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "activity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Presences Presence Set User Preferred Presence"
					]
				}
			}
		},
		{
			"displayName": "Availability",
			"name": "availability",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "availability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Presences Presence Set User Preferred Presence"
					]
				}
			}
		},
		{
			"displayName": "Expiration Duration",
			"name": "expirationDuration",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "expirationDuration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Actions"
					],
					"operation": [
						"Communications Presences Presence Set User Preferred Presence"
					]
				}
			}
		},
];
