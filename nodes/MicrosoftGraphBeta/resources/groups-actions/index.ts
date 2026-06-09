import type { INodeProperties } from 'n8n-workflow';

export const groupsActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					]
				}
			},
			"options": [
				{
					"name": "Groups Evaluate Dynamic Membership",
					"value": "Groups Evaluate Dynamic Membership",
					"action": "Invoke action evaluateDynamicMembership",
					"description": "Evaluate whether a user or device is or would be a member of a dynamic group. The membership rule is returned along with other details that were used in the evaluation. You can complete this operation in the following ways:",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/microsoft.graph.evaluateDynamicMembership"
						}
					}
				},
				{
					"name": "Groups Get By Ids",
					"value": "Groups Get By Ids",
					"action": "Invoke action getByIds",
					"description": "Return the directory objects specified in a list of IDs. Some common uses for this function are to:",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/microsoft.graph.getByIds"
						}
					}
				},
				{
					"name": "Groups Get User Owned Objects",
					"value": "Groups Get User Owned Objects",
					"action": "Invoke action getUserOwnedObjects",
					"description": "Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn't support pagination.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/microsoft.graph.getUserOwnedObjects"
						}
					}
				},
				{
					"name": "Groups Validate Properties",
					"value": "Groups Validate Properties",
					"action": "Invoke action validateProperties",
					"description": "Validate that a Microsoft 365 group's display name or mail nickname complies with naming policies.  Clients can use this API to determine whether a display name or mail nickname is valid before trying to **create** a Microsoft 365 group. For validating properties of an existing group, use the validateProperties function for groups. The following validations are performed for the display name and mail nickname properties: \n1. Validate the prefix and suffix naming policy\n2. Validate the custom banned words policy\n3. Validate the mail nickname is unique This API returns with the first failure encountered. If one or more properties fail multiple validations, only the property with the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you are only validating the prefix and suffix naming policy.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/microsoft.graph.validateProperties"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Attachments Create Upload Session",
					"value": "Groups Group Calendar Calendar View Event Attachments Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/attachments/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Exception Occurrences Event Attachments Create Upload Session",
					"value": "Groups Group Calendar Calendar View Event Exception Occurrences Event Attachments Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/attachments/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Attachments Create Upload Session",
					"value": "Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Attachments Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/attachments/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Accept",
					"value": "Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Accept",
					"action": "Invoke action accept",
					"description": "Accept the specified event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.accept"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Cancel",
					"value": "Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Cancel",
					"action": "Invoke action cancel",
					"description": "This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting \nby providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following\nerror message: 'Your request can't be completed. You need to be an organizer to cancel a meeting.' This action differs from Delete in that **Cancel** is available to only the organizer, and lets\nthe organizer send a custom message to the attendees about the cancellation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Decline",
					"value": "Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Decline",
					"action": "Invoke action decline",
					"description": "Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.decline"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Dismiss Reminder",
					"value": "Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Dismiss Reminder",
					"action": "Invoke action dismissReminder",
					"description": "Dismiss a reminder that has been triggered for an event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.dismissReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Forward",
					"value": "Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Forward",
					"action": "Invoke action forward",
					"description": "This action allows the organizer or attendee of a meeting event to forward the \nmeeting request to a new recipient.  If the meeting event is forwarded from an attendee's Microsoft 365 mailbox to another recipient, this action \nalso sends a message to notify the organizer of the forwarding, and adds the recipient to the organizer's \ncopy of the meeting event. This convenience is not available when forwarding from an Outlook.com account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.forward"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Snooze Reminder",
					"value": "Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Snooze Reminder",
					"action": "Invoke action snoozeReminder",
					"description": "Postpone a reminder for an event in a user calendar until a new time.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.snoozeReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Tentatively Accept",
					"value": "Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Tentatively Accept",
					"action": "Invoke action tentativelyAccept",
					"description": "Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.tentativelyAccept"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Exception Occurrences Event Accept",
					"value": "Groups Group Calendar Calendar View Event Exception Occurrences Event Accept",
					"action": "Invoke action accept",
					"description": "Accept the specified event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.accept"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Exception Occurrences Event Cancel",
					"value": "Groups Group Calendar Calendar View Event Exception Occurrences Event Cancel",
					"action": "Invoke action cancel",
					"description": "This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting \nby providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following\nerror message: 'Your request can't be completed. You need to be an organizer to cancel a meeting.' This action differs from Delete in that **Cancel** is available to only the organizer, and lets\nthe organizer send a custom message to the attendees about the cancellation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Exception Occurrences Event Decline",
					"value": "Groups Group Calendar Calendar View Event Exception Occurrences Event Decline",
					"action": "Invoke action decline",
					"description": "Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.decline"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Exception Occurrences Event Dismiss Reminder",
					"value": "Groups Group Calendar Calendar View Event Exception Occurrences Event Dismiss Reminder",
					"action": "Invoke action dismissReminder",
					"description": "Dismiss a reminder that has been triggered for an event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.dismissReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Exception Occurrences Event Forward",
					"value": "Groups Group Calendar Calendar View Event Exception Occurrences Event Forward",
					"action": "Invoke action forward",
					"description": "This action allows the organizer or attendee of a meeting event to forward the \nmeeting request to a new recipient.  If the meeting event is forwarded from an attendee's Microsoft 365 mailbox to another recipient, this action \nalso sends a message to notify the organizer of the forwarding, and adds the recipient to the organizer's \ncopy of the meeting event. This convenience is not available when forwarding from an Outlook.com account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.forward"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Exception Occurrences Event Snooze Reminder",
					"value": "Groups Group Calendar Calendar View Event Exception Occurrences Event Snooze Reminder",
					"action": "Invoke action snoozeReminder",
					"description": "Postpone a reminder for an event in a user calendar until a new time.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.snoozeReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Exception Occurrences Event Tentatively Accept",
					"value": "Groups Group Calendar Calendar View Event Exception Occurrences Event Tentatively Accept",
					"action": "Invoke action tentativelyAccept",
					"description": "Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.tentativelyAccept"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Instances Event Attachments Create Upload Session",
					"value": "Groups Group Calendar Calendar View Event Instances Event Attachments Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/attachments/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Attachments Create Upload Session",
					"value": "Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Attachments Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/attachments/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Accept",
					"value": "Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Accept",
					"action": "Invoke action accept",
					"description": "Accept the specified event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.accept"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Cancel",
					"value": "Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Cancel",
					"action": "Invoke action cancel",
					"description": "This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting \nby providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following\nerror message: 'Your request can't be completed. You need to be an organizer to cancel a meeting.' This action differs from Delete in that **Cancel** is available to only the organizer, and lets\nthe organizer send a custom message to the attendees about the cancellation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Decline",
					"value": "Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Decline",
					"action": "Invoke action decline",
					"description": "Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.decline"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Dismiss Reminder",
					"value": "Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Dismiss Reminder",
					"action": "Invoke action dismissReminder",
					"description": "Dismiss a reminder that has been triggered for an event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.dismissReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Forward",
					"value": "Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Forward",
					"action": "Invoke action forward",
					"description": "This action allows the organizer or attendee of a meeting event to forward the \nmeeting request to a new recipient.  If the meeting event is forwarded from an attendee's Microsoft 365 mailbox to another recipient, this action \nalso sends a message to notify the organizer of the forwarding, and adds the recipient to the organizer's \ncopy of the meeting event. This convenience is not available when forwarding from an Outlook.com account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.forward"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Snooze Reminder",
					"value": "Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Snooze Reminder",
					"action": "Invoke action snoozeReminder",
					"description": "Postpone a reminder for an event in a user calendar until a new time.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.snoozeReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Tentatively Accept",
					"value": "Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Tentatively Accept",
					"action": "Invoke action tentativelyAccept",
					"description": "Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.tentativelyAccept"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Instances Event Accept",
					"value": "Groups Group Calendar Calendar View Event Instances Event Accept",
					"action": "Invoke action accept",
					"description": "Accept the specified event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.accept"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Instances Event Cancel",
					"value": "Groups Group Calendar Calendar View Event Instances Event Cancel",
					"action": "Invoke action cancel",
					"description": "This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting \nby providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following\nerror message: 'Your request can't be completed. You need to be an organizer to cancel a meeting.' This action differs from Delete in that **Cancel** is available to only the organizer, and lets\nthe organizer send a custom message to the attendees about the cancellation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Instances Event Decline",
					"value": "Groups Group Calendar Calendar View Event Instances Event Decline",
					"action": "Invoke action decline",
					"description": "Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.decline"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Instances Event Dismiss Reminder",
					"value": "Groups Group Calendar Calendar View Event Instances Event Dismiss Reminder",
					"action": "Invoke action dismissReminder",
					"description": "Dismiss a reminder that has been triggered for an event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.dismissReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Instances Event Forward",
					"value": "Groups Group Calendar Calendar View Event Instances Event Forward",
					"action": "Invoke action forward",
					"description": "This action allows the organizer or attendee of a meeting event to forward the \nmeeting request to a new recipient.  If the meeting event is forwarded from an attendee's Microsoft 365 mailbox to another recipient, this action \nalso sends a message to notify the organizer of the forwarding, and adds the recipient to the organizer's \ncopy of the meeting event. This convenience is not available when forwarding from an Outlook.com account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.forward"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Instances Event Snooze Reminder",
					"value": "Groups Group Calendar Calendar View Event Instances Event Snooze Reminder",
					"action": "Invoke action snoozeReminder",
					"description": "Postpone a reminder for an event in a user calendar until a new time.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.snoozeReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Instances Event Tentatively Accept",
					"value": "Groups Group Calendar Calendar View Event Instances Event Tentatively Accept",
					"action": "Invoke action tentativelyAccept",
					"description": "Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.tentativelyAccept"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Accept",
					"value": "Groups Group Calendar Calendar View Event Accept",
					"action": "Invoke action accept",
					"description": "Accept the specified event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/microsoft.graph.accept"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Cancel",
					"value": "Groups Group Calendar Calendar View Event Cancel",
					"action": "Invoke action cancel",
					"description": "This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting \nby providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following\nerror message: 'Your request can't be completed. You need to be an organizer to cancel a meeting.' This action differs from Delete in that **Cancel** is available to only the organizer, and lets\nthe organizer send a custom message to the attendees about the cancellation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Decline",
					"value": "Groups Group Calendar Calendar View Event Decline",
					"action": "Invoke action decline",
					"description": "Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/microsoft.graph.decline"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Dismiss Reminder",
					"value": "Groups Group Calendar Calendar View Event Dismiss Reminder",
					"action": "Invoke action dismissReminder",
					"description": "Dismiss a reminder that has been triggered for an event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/microsoft.graph.dismissReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Forward",
					"value": "Groups Group Calendar Calendar View Event Forward",
					"action": "Invoke action forward",
					"description": "This action allows the organizer or attendee of a meeting event to forward the \nmeeting request to a new recipient.  If the meeting event is forwarded from an attendee's Microsoft 365 mailbox to another recipient, this action \nalso sends a message to notify the organizer of the forwarding, and adds the recipient to the organizer's \ncopy of the meeting event. This convenience is not available when forwarding from an Outlook.com account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/microsoft.graph.forward"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Snooze Reminder",
					"value": "Groups Group Calendar Calendar View Event Snooze Reminder",
					"action": "Invoke action snoozeReminder",
					"description": "Postpone a reminder for an event in a user calendar until a new time.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/microsoft.graph.snoozeReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar Calendar View Event Tentatively Accept",
					"value": "Groups Group Calendar Calendar View Event Tentatively Accept",
					"action": "Invoke action tentativelyAccept",
					"description": "Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/calendarView/{{$parameter[\"event-id\"]}}/microsoft.graph.tentativelyAccept"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Attachments Create Upload Session",
					"value": "Groups Group Calendar Events Event Attachments Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/attachments/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Exception Occurrences Event Attachments Create Upload Session",
					"value": "Groups Group Calendar Events Event Exception Occurrences Event Attachments Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/attachments/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Exception Occurrences Event Instances Event Attachments Create Upload Session",
					"value": "Groups Group Calendar Events Event Exception Occurrences Event Instances Event Attachments Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/attachments/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Exception Occurrences Event Instances Event Accept",
					"value": "Groups Group Calendar Events Event Exception Occurrences Event Instances Event Accept",
					"action": "Invoke action accept",
					"description": "Accept the specified event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.accept"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Exception Occurrences Event Instances Event Cancel",
					"value": "Groups Group Calendar Events Event Exception Occurrences Event Instances Event Cancel",
					"action": "Invoke action cancel",
					"description": "This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting \nby providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following\nerror message: 'Your request can't be completed. You need to be an organizer to cancel a meeting.' This action differs from Delete in that **Cancel** is available to only the organizer, and lets\nthe organizer send a custom message to the attendees about the cancellation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Exception Occurrences Event Instances Event Decline",
					"value": "Groups Group Calendar Events Event Exception Occurrences Event Instances Event Decline",
					"action": "Invoke action decline",
					"description": "Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.decline"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Exception Occurrences Event Instances Event Dismiss Reminder",
					"value": "Groups Group Calendar Events Event Exception Occurrences Event Instances Event Dismiss Reminder",
					"action": "Invoke action dismissReminder",
					"description": "Dismiss a reminder that has been triggered for an event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.dismissReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Exception Occurrences Event Instances Event Forward",
					"value": "Groups Group Calendar Events Event Exception Occurrences Event Instances Event Forward",
					"action": "Invoke action forward",
					"description": "This action allows the organizer or attendee of a meeting event to forward the \nmeeting request to a new recipient.  If the meeting event is forwarded from an attendee's Microsoft 365 mailbox to another recipient, this action \nalso sends a message to notify the organizer of the forwarding, and adds the recipient to the organizer's \ncopy of the meeting event. This convenience is not available when forwarding from an Outlook.com account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.forward"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Exception Occurrences Event Instances Event Snooze Reminder",
					"value": "Groups Group Calendar Events Event Exception Occurrences Event Instances Event Snooze Reminder",
					"action": "Invoke action snoozeReminder",
					"description": "Postpone a reminder for an event in a user calendar until a new time.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.snoozeReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Exception Occurrences Event Instances Event Tentatively Accept",
					"value": "Groups Group Calendar Events Event Exception Occurrences Event Instances Event Tentatively Accept",
					"action": "Invoke action tentativelyAccept",
					"description": "Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.tentativelyAccept"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Exception Occurrences Event Accept",
					"value": "Groups Group Calendar Events Event Exception Occurrences Event Accept",
					"action": "Invoke action accept",
					"description": "Accept the specified event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.accept"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Exception Occurrences Event Cancel",
					"value": "Groups Group Calendar Events Event Exception Occurrences Event Cancel",
					"action": "Invoke action cancel",
					"description": "This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting \nby providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following\nerror message: 'Your request can't be completed. You need to be an organizer to cancel a meeting.' This action differs from Delete in that **Cancel** is available to only the organizer, and lets\nthe organizer send a custom message to the attendees about the cancellation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Exception Occurrences Event Decline",
					"value": "Groups Group Calendar Events Event Exception Occurrences Event Decline",
					"action": "Invoke action decline",
					"description": "Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.decline"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Exception Occurrences Event Dismiss Reminder",
					"value": "Groups Group Calendar Events Event Exception Occurrences Event Dismiss Reminder",
					"action": "Invoke action dismissReminder",
					"description": "Dismiss a reminder that has been triggered for an event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.dismissReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Exception Occurrences Event Forward",
					"value": "Groups Group Calendar Events Event Exception Occurrences Event Forward",
					"action": "Invoke action forward",
					"description": "This action allows the organizer or attendee of a meeting event to forward the \nmeeting request to a new recipient.  If the meeting event is forwarded from an attendee's Microsoft 365 mailbox to another recipient, this action \nalso sends a message to notify the organizer of the forwarding, and adds the recipient to the organizer's \ncopy of the meeting event. This convenience is not available when forwarding from an Outlook.com account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.forward"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Exception Occurrences Event Snooze Reminder",
					"value": "Groups Group Calendar Events Event Exception Occurrences Event Snooze Reminder",
					"action": "Invoke action snoozeReminder",
					"description": "Postpone a reminder for an event in a user calendar until a new time.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.snoozeReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Exception Occurrences Event Tentatively Accept",
					"value": "Groups Group Calendar Events Event Exception Occurrences Event Tentatively Accept",
					"action": "Invoke action tentativelyAccept",
					"description": "Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.tentativelyAccept"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Instances Event Attachments Create Upload Session",
					"value": "Groups Group Calendar Events Event Instances Event Attachments Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/attachments/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Instances Event Exception Occurrences Event Attachments Create Upload Session",
					"value": "Groups Group Calendar Events Event Instances Event Exception Occurrences Event Attachments Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/attachments/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Instances Event Exception Occurrences Event Accept",
					"value": "Groups Group Calendar Events Event Instances Event Exception Occurrences Event Accept",
					"action": "Invoke action accept",
					"description": "Accept the specified event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.accept"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Instances Event Exception Occurrences Event Cancel",
					"value": "Groups Group Calendar Events Event Instances Event Exception Occurrences Event Cancel",
					"action": "Invoke action cancel",
					"description": "This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting \nby providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following\nerror message: 'Your request can't be completed. You need to be an organizer to cancel a meeting.' This action differs from Delete in that **Cancel** is available to only the organizer, and lets\nthe organizer send a custom message to the attendees about the cancellation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Instances Event Exception Occurrences Event Decline",
					"value": "Groups Group Calendar Events Event Instances Event Exception Occurrences Event Decline",
					"action": "Invoke action decline",
					"description": "Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.decline"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Instances Event Exception Occurrences Event Dismiss Reminder",
					"value": "Groups Group Calendar Events Event Instances Event Exception Occurrences Event Dismiss Reminder",
					"action": "Invoke action dismissReminder",
					"description": "Dismiss a reminder that has been triggered for an event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.dismissReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Instances Event Exception Occurrences Event Forward",
					"value": "Groups Group Calendar Events Event Instances Event Exception Occurrences Event Forward",
					"action": "Invoke action forward",
					"description": "This action allows the organizer or attendee of a meeting event to forward the \nmeeting request to a new recipient.  If the meeting event is forwarded from an attendee's Microsoft 365 mailbox to another recipient, this action \nalso sends a message to notify the organizer of the forwarding, and adds the recipient to the organizer's \ncopy of the meeting event. This convenience is not available when forwarding from an Outlook.com account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.forward"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Instances Event Exception Occurrences Event Snooze Reminder",
					"value": "Groups Group Calendar Events Event Instances Event Exception Occurrences Event Snooze Reminder",
					"action": "Invoke action snoozeReminder",
					"description": "Postpone a reminder for an event in a user calendar until a new time.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.snoozeReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Instances Event Exception Occurrences Event Tentatively Accept",
					"value": "Groups Group Calendar Events Event Instances Event Exception Occurrences Event Tentatively Accept",
					"action": "Invoke action tentativelyAccept",
					"description": "Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.tentativelyAccept"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Instances Event Accept",
					"value": "Groups Group Calendar Events Event Instances Event Accept",
					"action": "Invoke action accept",
					"description": "Accept the specified event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.accept"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Instances Event Cancel",
					"value": "Groups Group Calendar Events Event Instances Event Cancel",
					"action": "Invoke action cancel",
					"description": "This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting \nby providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following\nerror message: 'Your request can't be completed. You need to be an organizer to cancel a meeting.' This action differs from Delete in that **Cancel** is available to only the organizer, and lets\nthe organizer send a custom message to the attendees about the cancellation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Instances Event Decline",
					"value": "Groups Group Calendar Events Event Instances Event Decline",
					"action": "Invoke action decline",
					"description": "Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.decline"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Instances Event Dismiss Reminder",
					"value": "Groups Group Calendar Events Event Instances Event Dismiss Reminder",
					"action": "Invoke action dismissReminder",
					"description": "Dismiss a reminder that has been triggered for an event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.dismissReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Instances Event Forward",
					"value": "Groups Group Calendar Events Event Instances Event Forward",
					"action": "Invoke action forward",
					"description": "This action allows the organizer or attendee of a meeting event to forward the \nmeeting request to a new recipient.  If the meeting event is forwarded from an attendee's Microsoft 365 mailbox to another recipient, this action \nalso sends a message to notify the organizer of the forwarding, and adds the recipient to the organizer's \ncopy of the meeting event. This convenience is not available when forwarding from an Outlook.com account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.forward"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Instances Event Snooze Reminder",
					"value": "Groups Group Calendar Events Event Instances Event Snooze Reminder",
					"action": "Invoke action snoozeReminder",
					"description": "Postpone a reminder for an event in a user calendar until a new time.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.snoozeReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Instances Event Tentatively Accept",
					"value": "Groups Group Calendar Events Event Instances Event Tentatively Accept",
					"action": "Invoke action tentativelyAccept",
					"description": "Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.tentativelyAccept"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Accept",
					"value": "Groups Group Calendar Events Event Accept",
					"action": "Invoke action accept",
					"description": "Accept the specified event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/microsoft.graph.accept"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Cancel",
					"value": "Groups Group Calendar Events Event Cancel",
					"action": "Invoke action cancel",
					"description": "This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting \nby providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following\nerror message: 'Your request can't be completed. You need to be an organizer to cancel a meeting.' This action differs from Delete in that **Cancel** is available to only the organizer, and lets\nthe organizer send a custom message to the attendees about the cancellation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Decline",
					"value": "Groups Group Calendar Events Event Decline",
					"action": "Invoke action decline",
					"description": "Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/microsoft.graph.decline"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Dismiss Reminder",
					"value": "Groups Group Calendar Events Event Dismiss Reminder",
					"action": "Invoke action dismissReminder",
					"description": "Dismiss a reminder that has been triggered for an event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/microsoft.graph.dismissReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Forward",
					"value": "Groups Group Calendar Events Event Forward",
					"action": "Invoke action forward",
					"description": "This action allows the organizer or attendee of a meeting event to forward the \nmeeting request to a new recipient.  If the meeting event is forwarded from an attendee's Microsoft 365 mailbox to another recipient, this action \nalso sends a message to notify the organizer of the forwarding, and adds the recipient to the organizer's \ncopy of the meeting event. This convenience is not available when forwarding from an Outlook.com account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/microsoft.graph.forward"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Snooze Reminder",
					"value": "Groups Group Calendar Events Event Snooze Reminder",
					"action": "Invoke action snoozeReminder",
					"description": "Postpone a reminder for an event in a user calendar until a new time.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/microsoft.graph.snoozeReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar Events Event Tentatively Accept",
					"value": "Groups Group Calendar Events Event Tentatively Accept",
					"action": "Invoke action tentativelyAccept",
					"description": "Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/events/{{$parameter[\"event-id\"]}}/microsoft.graph.tentativelyAccept"
						}
					}
				},
				{
					"name": "Groups Group Calendar Get Schedule",
					"value": "Groups Group Calendar Get Schedule",
					"action": "Invoke action getSchedule",
					"description": "Get the free/busy availability information for a collection of users, distributions lists, or resources (rooms or equipment) for a specified time period.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendar/microsoft.graph.getSchedule"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Attachments Create Upload Session",
					"value": "Groups Group Calendar View Event Attachments Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/attachments/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Exception Occurrences Event Attachments Create Upload Session",
					"value": "Groups Group Calendar View Event Exception Occurrences Event Attachments Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/attachments/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Exception Occurrences Event Instances Event Attachments Create Upload Session",
					"value": "Groups Group Calendar View Event Exception Occurrences Event Instances Event Attachments Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/attachments/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Exception Occurrences Event Instances Event Accept",
					"value": "Groups Group Calendar View Event Exception Occurrences Event Instances Event Accept",
					"action": "Invoke action accept",
					"description": "Accept the specified event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.accept"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Exception Occurrences Event Instances Event Cancel",
					"value": "Groups Group Calendar View Event Exception Occurrences Event Instances Event Cancel",
					"action": "Invoke action cancel",
					"description": "This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting \nby providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following\nerror message: 'Your request can't be completed. You need to be an organizer to cancel a meeting.' This action differs from Delete in that **Cancel** is available to only the organizer, and lets\nthe organizer send a custom message to the attendees about the cancellation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Exception Occurrences Event Instances Event Decline",
					"value": "Groups Group Calendar View Event Exception Occurrences Event Instances Event Decline",
					"action": "Invoke action decline",
					"description": "Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.decline"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Exception Occurrences Event Instances Event Dismiss Reminder",
					"value": "Groups Group Calendar View Event Exception Occurrences Event Instances Event Dismiss Reminder",
					"action": "Invoke action dismissReminder",
					"description": "Dismiss a reminder that has been triggered for an event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.dismissReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Exception Occurrences Event Instances Event Forward",
					"value": "Groups Group Calendar View Event Exception Occurrences Event Instances Event Forward",
					"action": "Invoke action forward",
					"description": "This action allows the organizer or attendee of a meeting event to forward the \nmeeting request to a new recipient.  If the meeting event is forwarded from an attendee's Microsoft 365 mailbox to another recipient, this action \nalso sends a message to notify the organizer of the forwarding, and adds the recipient to the organizer's \ncopy of the meeting event. This convenience is not available when forwarding from an Outlook.com account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.forward"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Exception Occurrences Event Instances Event Snooze Reminder",
					"value": "Groups Group Calendar View Event Exception Occurrences Event Instances Event Snooze Reminder",
					"action": "Invoke action snoozeReminder",
					"description": "Postpone a reminder for an event in a user calendar until a new time.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.snoozeReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Exception Occurrences Event Instances Event Tentatively Accept",
					"value": "Groups Group Calendar View Event Exception Occurrences Event Instances Event Tentatively Accept",
					"action": "Invoke action tentativelyAccept",
					"description": "Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.tentativelyAccept"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Exception Occurrences Event Accept",
					"value": "Groups Group Calendar View Event Exception Occurrences Event Accept",
					"action": "Invoke action accept",
					"description": "Accept the specified event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.accept"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Exception Occurrences Event Cancel",
					"value": "Groups Group Calendar View Event Exception Occurrences Event Cancel",
					"action": "Invoke action cancel",
					"description": "This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting \nby providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following\nerror message: 'Your request can't be completed. You need to be an organizer to cancel a meeting.' This action differs from Delete in that **Cancel** is available to only the organizer, and lets\nthe organizer send a custom message to the attendees about the cancellation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Exception Occurrences Event Decline",
					"value": "Groups Group Calendar View Event Exception Occurrences Event Decline",
					"action": "Invoke action decline",
					"description": "Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.decline"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Exception Occurrences Event Dismiss Reminder",
					"value": "Groups Group Calendar View Event Exception Occurrences Event Dismiss Reminder",
					"action": "Invoke action dismissReminder",
					"description": "Dismiss a reminder that has been triggered for an event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.dismissReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Exception Occurrences Event Forward",
					"value": "Groups Group Calendar View Event Exception Occurrences Event Forward",
					"action": "Invoke action forward",
					"description": "This action allows the organizer or attendee of a meeting event to forward the \nmeeting request to a new recipient.  If the meeting event is forwarded from an attendee's Microsoft 365 mailbox to another recipient, this action \nalso sends a message to notify the organizer of the forwarding, and adds the recipient to the organizer's \ncopy of the meeting event. This convenience is not available when forwarding from an Outlook.com account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.forward"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Exception Occurrences Event Snooze Reminder",
					"value": "Groups Group Calendar View Event Exception Occurrences Event Snooze Reminder",
					"action": "Invoke action snoozeReminder",
					"description": "Postpone a reminder for an event in a user calendar until a new time.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.snoozeReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Exception Occurrences Event Tentatively Accept",
					"value": "Groups Group Calendar View Event Exception Occurrences Event Tentatively Accept",
					"action": "Invoke action tentativelyAccept",
					"description": "Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.tentativelyAccept"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Instances Event Attachments Create Upload Session",
					"value": "Groups Group Calendar View Event Instances Event Attachments Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/attachments/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Instances Event Exception Occurrences Event Attachments Create Upload Session",
					"value": "Groups Group Calendar View Event Instances Event Exception Occurrences Event Attachments Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/attachments/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Instances Event Exception Occurrences Event Accept",
					"value": "Groups Group Calendar View Event Instances Event Exception Occurrences Event Accept",
					"action": "Invoke action accept",
					"description": "Accept the specified event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.accept"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Instances Event Exception Occurrences Event Cancel",
					"value": "Groups Group Calendar View Event Instances Event Exception Occurrences Event Cancel",
					"action": "Invoke action cancel",
					"description": "This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting \nby providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following\nerror message: 'Your request can't be completed. You need to be an organizer to cancel a meeting.' This action differs from Delete in that **Cancel** is available to only the organizer, and lets\nthe organizer send a custom message to the attendees about the cancellation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Instances Event Exception Occurrences Event Decline",
					"value": "Groups Group Calendar View Event Instances Event Exception Occurrences Event Decline",
					"action": "Invoke action decline",
					"description": "Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.decline"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Instances Event Exception Occurrences Event Dismiss Reminder",
					"value": "Groups Group Calendar View Event Instances Event Exception Occurrences Event Dismiss Reminder",
					"action": "Invoke action dismissReminder",
					"description": "Dismiss a reminder that has been triggered for an event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.dismissReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Instances Event Exception Occurrences Event Forward",
					"value": "Groups Group Calendar View Event Instances Event Exception Occurrences Event Forward",
					"action": "Invoke action forward",
					"description": "This action allows the organizer or attendee of a meeting event to forward the \nmeeting request to a new recipient.  If the meeting event is forwarded from an attendee's Microsoft 365 mailbox to another recipient, this action \nalso sends a message to notify the organizer of the forwarding, and adds the recipient to the organizer's \ncopy of the meeting event. This convenience is not available when forwarding from an Outlook.com account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.forward"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Instances Event Exception Occurrences Event Snooze Reminder",
					"value": "Groups Group Calendar View Event Instances Event Exception Occurrences Event Snooze Reminder",
					"action": "Invoke action snoozeReminder",
					"description": "Postpone a reminder for an event in a user calendar until a new time.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.snoozeReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Instances Event Exception Occurrences Event Tentatively Accept",
					"value": "Groups Group Calendar View Event Instances Event Exception Occurrences Event Tentatively Accept",
					"action": "Invoke action tentativelyAccept",
					"description": "Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.tentativelyAccept"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Instances Event Accept",
					"value": "Groups Group Calendar View Event Instances Event Accept",
					"action": "Invoke action accept",
					"description": "Accept the specified event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.accept"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Instances Event Cancel",
					"value": "Groups Group Calendar View Event Instances Event Cancel",
					"action": "Invoke action cancel",
					"description": "This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting \nby providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following\nerror message: 'Your request can't be completed. You need to be an organizer to cancel a meeting.' This action differs from Delete in that **Cancel** is available to only the organizer, and lets\nthe organizer send a custom message to the attendees about the cancellation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Instances Event Decline",
					"value": "Groups Group Calendar View Event Instances Event Decline",
					"action": "Invoke action decline",
					"description": "Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.decline"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Instances Event Dismiss Reminder",
					"value": "Groups Group Calendar View Event Instances Event Dismiss Reminder",
					"action": "Invoke action dismissReminder",
					"description": "Dismiss a reminder that has been triggered for an event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.dismissReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Instances Event Forward",
					"value": "Groups Group Calendar View Event Instances Event Forward",
					"action": "Invoke action forward",
					"description": "This action allows the organizer or attendee of a meeting event to forward the \nmeeting request to a new recipient.  If the meeting event is forwarded from an attendee's Microsoft 365 mailbox to another recipient, this action \nalso sends a message to notify the organizer of the forwarding, and adds the recipient to the organizer's \ncopy of the meeting event. This convenience is not available when forwarding from an Outlook.com account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.forward"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Instances Event Snooze Reminder",
					"value": "Groups Group Calendar View Event Instances Event Snooze Reminder",
					"action": "Invoke action snoozeReminder",
					"description": "Postpone a reminder for an event in a user calendar until a new time.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.snoozeReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Instances Event Tentatively Accept",
					"value": "Groups Group Calendar View Event Instances Event Tentatively Accept",
					"action": "Invoke action tentativelyAccept",
					"description": "Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.tentativelyAccept"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Accept",
					"value": "Groups Group Calendar View Event Accept",
					"action": "Invoke action accept",
					"description": "Accept the specified event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/microsoft.graph.accept"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Cancel",
					"value": "Groups Group Calendar View Event Cancel",
					"action": "Invoke action cancel",
					"description": "This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting \nby providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following\nerror message: 'Your request can't be completed. You need to be an organizer to cancel a meeting.' This action differs from Delete in that **Cancel** is available to only the organizer, and lets\nthe organizer send a custom message to the attendees about the cancellation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Decline",
					"value": "Groups Group Calendar View Event Decline",
					"action": "Invoke action decline",
					"description": "Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/microsoft.graph.decline"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Dismiss Reminder",
					"value": "Groups Group Calendar View Event Dismiss Reminder",
					"action": "Invoke action dismissReminder",
					"description": "Dismiss a reminder that has been triggered for an event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/microsoft.graph.dismissReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Forward",
					"value": "Groups Group Calendar View Event Forward",
					"action": "Invoke action forward",
					"description": "This action allows the organizer or attendee of a meeting event to forward the \nmeeting request to a new recipient.  If the meeting event is forwarded from an attendee's Microsoft 365 mailbox to another recipient, this action \nalso sends a message to notify the organizer of the forwarding, and adds the recipient to the organizer's \ncopy of the meeting event. This convenience is not available when forwarding from an Outlook.com account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/microsoft.graph.forward"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Snooze Reminder",
					"value": "Groups Group Calendar View Event Snooze Reminder",
					"action": "Invoke action snoozeReminder",
					"description": "Postpone a reminder for an event in a user calendar until a new time.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/microsoft.graph.snoozeReminder"
						}
					}
				},
				{
					"name": "Groups Group Calendar View Event Tentatively Accept",
					"value": "Groups Group Calendar View Event Tentatively Accept",
					"action": "Invoke action tentativelyAccept",
					"description": "Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/microsoft.graph.tentativelyAccept"
						}
					}
				},
				{
					"name": "Groups Group Conversations Conversation Threads Conversation Thread Reply",
					"value": "Groups Group Conversations Conversation Threads Conversation Thread Reply",
					"action": "Invoke action reply",
					"description": "Add an attachment when creating a group post.  This operation limits the size of the attachment you can add to under 3 MB. An attachment can be one of the following types: All these types of attachment resources are derived from the attachment\nresource. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/microsoft.graph.reply"
						}
					}
				},
				{
					"name": "Groups Group Conversations Conversation Threads Conversation Thread Posts Post Attachments Create Upload Session",
					"value": "Groups Group Conversations Conversation Threads Conversation Thread Posts Post Attachments Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/attachments/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Groups Group Conversations Conversation Threads Conversation Thread Posts Post In Reply To Attachments Create Upload Session",
					"value": "Groups Group Conversations Conversation Threads Conversation Thread Posts Post In Reply To Attachments Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/attachments/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Groups Group Conversations Conversation Threads Conversation Thread Posts Post In Reply To Forward",
					"value": "Groups Group Conversations Conversation Threads Conversation Thread Posts Post In Reply To Forward",
					"action": "Invoke action forward",
					"description": "Forward a post to a recipient. You can specify both the parent conversation and thread in the request, \nor, you can specify just the parent thread without the parent conversation. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/microsoft.graph.forward"
						}
					}
				},
				{
					"name": "Groups Group Conversations Conversation Threads Conversation Thread Posts Post In Reply To Reply",
					"value": "Groups Group Conversations Conversation Threads Conversation Thread Posts Post In Reply To Reply",
					"action": "Invoke action reply",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/microsoft.graph.reply"
						}
					}
				},
				{
					"name": "Groups Group Conversations Conversation Threads Conversation Thread Posts Post Forward",
					"value": "Groups Group Conversations Conversation Threads Conversation Thread Posts Post Forward",
					"action": "Invoke action forward",
					"description": "Forward a post to a recipient. You can specify both the parent conversation and thread in the request, \nor, you can specify just the parent thread without the parent conversation. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/microsoft.graph.forward"
						}
					}
				},
				{
					"name": "Groups Group Conversations Conversation Threads Conversation Thread Posts Post Reply",
					"value": "Groups Group Conversations Conversation Threads Conversation Thread Posts Post Reply",
					"action": "Invoke action reply",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/microsoft.graph.reply"
						}
					}
				},
				{
					"name": "Groups Group Events Event Attachments Create Upload Session",
					"value": "Groups Group Events Event Attachments Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/attachments/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Groups Group Events Event Exception Occurrences Event Attachments Create Upload Session",
					"value": "Groups Group Events Event Exception Occurrences Event Attachments Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/attachments/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Groups Group Events Event Exception Occurrences Event Instances Event Attachments Create Upload Session",
					"value": "Groups Group Events Event Exception Occurrences Event Instances Event Attachments Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/attachments/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Groups Group Events Event Exception Occurrences Event Instances Event Accept",
					"value": "Groups Group Events Event Exception Occurrences Event Instances Event Accept",
					"action": "Invoke action accept",
					"description": "Accept the specified event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.accept"
						}
					}
				},
				{
					"name": "Groups Group Events Event Exception Occurrences Event Instances Event Cancel",
					"value": "Groups Group Events Event Exception Occurrences Event Instances Event Cancel",
					"action": "Invoke action cancel",
					"description": "This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting \nby providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following\nerror message: 'Your request can't be completed. You need to be an organizer to cancel a meeting.' This action differs from Delete in that **Cancel** is available to only the organizer, and lets\nthe organizer send a custom message to the attendees about the cancellation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Groups Group Events Event Exception Occurrences Event Instances Event Decline",
					"value": "Groups Group Events Event Exception Occurrences Event Instances Event Decline",
					"action": "Invoke action decline",
					"description": "Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.decline"
						}
					}
				},
				{
					"name": "Groups Group Events Event Exception Occurrences Event Instances Event Dismiss Reminder",
					"value": "Groups Group Events Event Exception Occurrences Event Instances Event Dismiss Reminder",
					"action": "Invoke action dismissReminder",
					"description": "Dismiss a reminder that has been triggered for an event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.dismissReminder"
						}
					}
				},
				{
					"name": "Groups Group Events Event Exception Occurrences Event Instances Event Forward",
					"value": "Groups Group Events Event Exception Occurrences Event Instances Event Forward",
					"action": "Invoke action forward",
					"description": "This action allows the organizer or attendee of a meeting event to forward the \nmeeting request to a new recipient.  If the meeting event is forwarded from an attendee's Microsoft 365 mailbox to another recipient, this action \nalso sends a message to notify the organizer of the forwarding, and adds the recipient to the organizer's \ncopy of the meeting event. This convenience is not available when forwarding from an Outlook.com account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.forward"
						}
					}
				},
				{
					"name": "Groups Group Events Event Exception Occurrences Event Instances Event Snooze Reminder",
					"value": "Groups Group Events Event Exception Occurrences Event Instances Event Snooze Reminder",
					"action": "Invoke action snoozeReminder",
					"description": "Postpone a reminder for an event in a user calendar until a new time.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.snoozeReminder"
						}
					}
				},
				{
					"name": "Groups Group Events Event Exception Occurrences Event Instances Event Tentatively Accept",
					"value": "Groups Group Events Event Exception Occurrences Event Instances Event Tentatively Accept",
					"action": "Invoke action tentativelyAccept",
					"description": "Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/microsoft.graph.tentativelyAccept"
						}
					}
				},
				{
					"name": "Groups Group Events Event Exception Occurrences Event Accept",
					"value": "Groups Group Events Event Exception Occurrences Event Accept",
					"action": "Invoke action accept",
					"description": "Accept the specified event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.accept"
						}
					}
				},
				{
					"name": "Groups Group Events Event Exception Occurrences Event Cancel",
					"value": "Groups Group Events Event Exception Occurrences Event Cancel",
					"action": "Invoke action cancel",
					"description": "This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting \nby providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following\nerror message: 'Your request can't be completed. You need to be an organizer to cancel a meeting.' This action differs from Delete in that **Cancel** is available to only the organizer, and lets\nthe organizer send a custom message to the attendees about the cancellation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Groups Group Events Event Exception Occurrences Event Decline",
					"value": "Groups Group Events Event Exception Occurrences Event Decline",
					"action": "Invoke action decline",
					"description": "Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.decline"
						}
					}
				},
				{
					"name": "Groups Group Events Event Exception Occurrences Event Dismiss Reminder",
					"value": "Groups Group Events Event Exception Occurrences Event Dismiss Reminder",
					"action": "Invoke action dismissReminder",
					"description": "Dismiss a reminder that has been triggered for an event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.dismissReminder"
						}
					}
				},
				{
					"name": "Groups Group Events Event Exception Occurrences Event Forward",
					"value": "Groups Group Events Event Exception Occurrences Event Forward",
					"action": "Invoke action forward",
					"description": "This action allows the organizer or attendee of a meeting event to forward the \nmeeting request to a new recipient.  If the meeting event is forwarded from an attendee's Microsoft 365 mailbox to another recipient, this action \nalso sends a message to notify the organizer of the forwarding, and adds the recipient to the organizer's \ncopy of the meeting event. This convenience is not available when forwarding from an Outlook.com account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.forward"
						}
					}
				},
				{
					"name": "Groups Group Events Event Exception Occurrences Event Snooze Reminder",
					"value": "Groups Group Events Event Exception Occurrences Event Snooze Reminder",
					"action": "Invoke action snoozeReminder",
					"description": "Postpone a reminder for an event in a user calendar until a new time.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.snoozeReminder"
						}
					}
				},
				{
					"name": "Groups Group Events Event Exception Occurrences Event Tentatively Accept",
					"value": "Groups Group Events Event Exception Occurrences Event Tentatively Accept",
					"action": "Invoke action tentativelyAccept",
					"description": "Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/microsoft.graph.tentativelyAccept"
						}
					}
				},
				{
					"name": "Groups Group Events Event Instances Event Attachments Create Upload Session",
					"value": "Groups Group Events Event Instances Event Attachments Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/attachments/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Groups Group Events Event Instances Event Exception Occurrences Event Attachments Create Upload Session",
					"value": "Groups Group Events Event Instances Event Exception Occurrences Event Attachments Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/attachments/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Groups Group Events Event Instances Event Exception Occurrences Event Accept",
					"value": "Groups Group Events Event Instances Event Exception Occurrences Event Accept",
					"action": "Invoke action accept",
					"description": "Accept the specified event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.accept"
						}
					}
				},
				{
					"name": "Groups Group Events Event Instances Event Exception Occurrences Event Cancel",
					"value": "Groups Group Events Event Instances Event Exception Occurrences Event Cancel",
					"action": "Invoke action cancel",
					"description": "This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting \nby providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following\nerror message: 'Your request can't be completed. You need to be an organizer to cancel a meeting.' This action differs from Delete in that **Cancel** is available to only the organizer, and lets\nthe organizer send a custom message to the attendees about the cancellation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Groups Group Events Event Instances Event Exception Occurrences Event Decline",
					"value": "Groups Group Events Event Instances Event Exception Occurrences Event Decline",
					"action": "Invoke action decline",
					"description": "Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.decline"
						}
					}
				},
				{
					"name": "Groups Group Events Event Instances Event Exception Occurrences Event Dismiss Reminder",
					"value": "Groups Group Events Event Instances Event Exception Occurrences Event Dismiss Reminder",
					"action": "Invoke action dismissReminder",
					"description": "Dismiss a reminder that has been triggered for an event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.dismissReminder"
						}
					}
				},
				{
					"name": "Groups Group Events Event Instances Event Exception Occurrences Event Forward",
					"value": "Groups Group Events Event Instances Event Exception Occurrences Event Forward",
					"action": "Invoke action forward",
					"description": "This action allows the organizer or attendee of a meeting event to forward the \nmeeting request to a new recipient.  If the meeting event is forwarded from an attendee's Microsoft 365 mailbox to another recipient, this action \nalso sends a message to notify the organizer of the forwarding, and adds the recipient to the organizer's \ncopy of the meeting event. This convenience is not available when forwarding from an Outlook.com account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.forward"
						}
					}
				},
				{
					"name": "Groups Group Events Event Instances Event Exception Occurrences Event Snooze Reminder",
					"value": "Groups Group Events Event Instances Event Exception Occurrences Event Snooze Reminder",
					"action": "Invoke action snoozeReminder",
					"description": "Postpone a reminder for an event in a user calendar until a new time.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.snoozeReminder"
						}
					}
				},
				{
					"name": "Groups Group Events Event Instances Event Exception Occurrences Event Tentatively Accept",
					"value": "Groups Group Events Event Instances Event Exception Occurrences Event Tentatively Accept",
					"action": "Invoke action tentativelyAccept",
					"description": "Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/microsoft.graph.tentativelyAccept"
						}
					}
				},
				{
					"name": "Groups Group Events Event Instances Event Accept",
					"value": "Groups Group Events Event Instances Event Accept",
					"action": "Invoke action accept",
					"description": "Accept the specified event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.accept"
						}
					}
				},
				{
					"name": "Groups Group Events Event Instances Event Cancel",
					"value": "Groups Group Events Event Instances Event Cancel",
					"action": "Invoke action cancel",
					"description": "This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting \nby providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following\nerror message: 'Your request can't be completed. You need to be an organizer to cancel a meeting.' This action differs from Delete in that **Cancel** is available to only the organizer, and lets\nthe organizer send a custom message to the attendees about the cancellation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Groups Group Events Event Instances Event Decline",
					"value": "Groups Group Events Event Instances Event Decline",
					"action": "Invoke action decline",
					"description": "Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.decline"
						}
					}
				},
				{
					"name": "Groups Group Events Event Instances Event Dismiss Reminder",
					"value": "Groups Group Events Event Instances Event Dismiss Reminder",
					"action": "Invoke action dismissReminder",
					"description": "Dismiss a reminder that has been triggered for an event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.dismissReminder"
						}
					}
				},
				{
					"name": "Groups Group Events Event Instances Event Forward",
					"value": "Groups Group Events Event Instances Event Forward",
					"action": "Invoke action forward",
					"description": "This action allows the organizer or attendee of a meeting event to forward the \nmeeting request to a new recipient.  If the meeting event is forwarded from an attendee's Microsoft 365 mailbox to another recipient, this action \nalso sends a message to notify the organizer of the forwarding, and adds the recipient to the organizer's \ncopy of the meeting event. This convenience is not available when forwarding from an Outlook.com account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.forward"
						}
					}
				},
				{
					"name": "Groups Group Events Event Instances Event Snooze Reminder",
					"value": "Groups Group Events Event Instances Event Snooze Reminder",
					"action": "Invoke action snoozeReminder",
					"description": "Postpone a reminder for an event in a user calendar until a new time.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.snoozeReminder"
						}
					}
				},
				{
					"name": "Groups Group Events Event Instances Event Tentatively Accept",
					"value": "Groups Group Events Event Instances Event Tentatively Accept",
					"action": "Invoke action tentativelyAccept",
					"description": "Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/microsoft.graph.tentativelyAccept"
						}
					}
				},
				{
					"name": "Groups Group Events Event Accept",
					"value": "Groups Group Events Event Accept",
					"action": "Invoke action accept",
					"description": "Accept the specified event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/microsoft.graph.accept"
						}
					}
				},
				{
					"name": "Groups Group Events Event Cancel",
					"value": "Groups Group Events Event Cancel",
					"action": "Invoke action cancel",
					"description": "This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting \nby providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following\nerror message: 'Your request can't be completed. You need to be an organizer to cancel a meeting.' This action differs from Delete in that **Cancel** is available to only the organizer, and lets\nthe organizer send a custom message to the attendees about the cancellation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Groups Group Events Event Decline",
					"value": "Groups Group Events Event Decline",
					"action": "Invoke action decline",
					"description": "Decline invitation to the specified event in a user calendar. If the event allows proposals for new times, on declining the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/microsoft.graph.decline"
						}
					}
				},
				{
					"name": "Groups Group Events Event Dismiss Reminder",
					"value": "Groups Group Events Event Dismiss Reminder",
					"action": "Invoke action dismissReminder",
					"description": "Dismiss a reminder that has been triggered for an event in a user calendar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/microsoft.graph.dismissReminder"
						}
					}
				},
				{
					"name": "Groups Group Events Event Forward",
					"value": "Groups Group Events Event Forward",
					"action": "Invoke action forward",
					"description": "This action allows the organizer or attendee of a meeting event to forward the \nmeeting request to a new recipient.  If the meeting event is forwarded from an attendee's Microsoft 365 mailbox to another recipient, this action \nalso sends a message to notify the organizer of the forwarding, and adds the recipient to the organizer's \ncopy of the meeting event. This convenience is not available when forwarding from an Outlook.com account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/microsoft.graph.forward"
						}
					}
				},
				{
					"name": "Groups Group Events Event Snooze Reminder",
					"value": "Groups Group Events Event Snooze Reminder",
					"action": "Invoke action snoozeReminder",
					"description": "Postpone a reminder for an event in a user calendar until a new time.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/microsoft.graph.snoozeReminder"
						}
					}
				},
				{
					"name": "Groups Group Events Event Tentatively Accept",
					"value": "Groups Group Events Event Tentatively Accept",
					"action": "Invoke action tentativelyAccept",
					"description": "Tentatively accept the specified event in a user calendar. If the event allows proposals for new times, on responding tentative to the event, an invitee can choose to suggest an alternative time by including the **proposedNewTime** parameter. For more information on how to propose a time, and how to receive and accept a new time proposal, see Propose new meeting times.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/microsoft.graph.tentativelyAccept"
						}
					}
				},
				{
					"name": "Groups Group Group Lifecycle Policies Renew Group",
					"value": "Groups Group Group Lifecycle Policies Renew Group",
					"action": "Invoke action renewGroup",
					"description": "Renew a group's expiration. When a group is renewed, the group expiration is extended by the number of days defined in the policy.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/groupLifecyclePolicies/microsoft.graph.renewGroup"
						}
					}
				},
				{
					"name": "Groups Group Group Lifecycle Policies Group Lifecycle Policy Add Group",
					"value": "Groups Group Group Lifecycle Policies Group Lifecycle Policy Add Group",
					"action": "Invoke action addGroup",
					"description": "Invoke action addGroup",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/groupLifecyclePolicies/{{$parameter[\"groupLifecyclePolicy-id\"]}}/microsoft.graph.addGroup"
						}
					}
				},
				{
					"name": "Groups Group Group Lifecycle Policies Group Lifecycle Policy Remove Group",
					"value": "Groups Group Group Lifecycle Policies Group Lifecycle Policy Remove Group",
					"action": "Invoke action removeGroup",
					"description": "Invoke action removeGroup",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/groupLifecyclePolicies/{{$parameter[\"groupLifecyclePolicy-id\"]}}/microsoft.graph.removeGroup"
						}
					}
				},
				{
					"name": "Groups Group Add Favorite",
					"value": "Groups Group Add Favorite",
					"action": "Invoke action addFavorite",
					"description": "Add the group to the list of the current user's favorite groups. Supported for Microsoft 365 groups only.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/microsoft.graph.addFavorite"
						}
					}
				},
				{
					"name": "Groups Group Assign License",
					"value": "Groups Group Assign License",
					"action": "Invoke action assignLicense",
					"description": "Add or remove licenses on the group. Licenses assigned to the group will be assigned to all users in the group. To learn more about group-based licensing, see What is group-based licensing in Azure Active Directory. To get the subscriptions available in the directory, perform a GET subscribedSkus request.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/microsoft.graph.assignLicense"
						}
					}
				},
				{
					"name": "Groups Group Check Granted Permissions For App",
					"value": "Groups Group Check Granted Permissions For App",
					"action": "Invoke action checkGrantedPermissionsForApp",
					"description": "Invoke action checkGrantedPermissionsForApp",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/microsoft.graph.checkGrantedPermissionsForApp"
						}
					}
				},
				{
					"name": "Groups Group Check Member Groups",
					"value": "Groups Group Check Member Groups",
					"action": "Invoke action checkMemberGroups",
					"description": "Check for membership in a specified list of group IDs, and return from that list those groups (identified by IDs) of which the specified user, group, service principal, organizational contact, device, or directory object is a member. This function is transitive. You can check up to a maximum of 20 groups per request. This function supports all groups provisioned in Azure AD. Because Microsoft 365 groups cannot contain other groups, membership in a Microsoft 365 group is always direct.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/microsoft.graph.checkMemberGroups"
						}
					}
				},
				{
					"name": "Groups Group Check Member Objects",
					"value": "Groups Group Check Member Objects",
					"action": "Invoke action checkMemberObjects",
					"description": "Invoke action checkMemberObjects",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/microsoft.graph.checkMemberObjects"
						}
					}
				},
				{
					"name": "Groups Group Evaluate Dynamic Membership",
					"value": "Groups Group Evaluate Dynamic Membership",
					"action": "Invoke action evaluateDynamicMembership",
					"description": "Evaluate whether a user or device is or would be a member of a dynamic group. The membership rule is returned along with other details that were used in the evaluation. You can complete this operation in the following ways:",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/microsoft.graph.evaluateDynamicMembership"
						}
					}
				},
				{
					"name": "Groups Group Get Member Groups",
					"value": "Groups Group Get Member Groups",
					"action": "Invoke action getMemberGroups",
					"description": "Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/microsoft.graph.getMemberGroups"
						}
					}
				},
				{
					"name": "Groups Group Get Member Objects",
					"value": "Groups Group Get Member Objects",
					"action": "Invoke action getMemberObjects",
					"description": "Invoke action getMemberObjects",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/microsoft.graph.getMemberObjects"
						}
					}
				},
				{
					"name": "Groups Group Remove Favorite",
					"value": "Groups Group Remove Favorite",
					"action": "Invoke action removeFavorite",
					"description": "Remove the group from the list of the current user's favorite groups. Supported for Microsoft 365 groups only.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/microsoft.graph.removeFavorite"
						}
					}
				},
				{
					"name": "Groups Group Renew",
					"value": "Groups Group Renew",
					"action": "Invoke action renew",
					"description": "Renews a group's expiration. When a group is renewed, the group expiration is extended by the number of days defined in the policy.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/microsoft.graph.renew"
						}
					}
				},
				{
					"name": "Groups Group Reset Unseen Count",
					"value": "Groups Group Reset Unseen Count",
					"action": "Invoke action resetUnseenCount",
					"description": "Reset the unseenCount of all the posts that the current user has not seen since their last visit. Supported for Microsoft 365 groups only.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/microsoft.graph.resetUnseenCount"
						}
					}
				},
				{
					"name": "Groups Group Restore",
					"value": "Groups Group Restore",
					"action": "Invoke action restore",
					"description": "Restore a recently deleted application, group, servicePrincipal, administrative unit, or user object from deleted items. If an item was accidentally deleted, you can fully restore the item. This is not applicable to security groups, which are deleted permanently. A recently deleted item will remain available for up to 30 days. After 30 days, the item is permanently deleted.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/microsoft.graph.restore"
						}
					}
				},
				{
					"name": "Groups Group Subscribe By Mail",
					"value": "Groups Group Subscribe By Mail",
					"action": "Invoke action subscribeByMail",
					"description": "Calling this method will enable the current user to receive email notifications for this group, about new posts, events, and files in that group. Supported for Microsoft 365 groups only.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/microsoft.graph.subscribeByMail"
						}
					}
				},
				{
					"name": "Groups Group Unsubscribe By Mail",
					"value": "Groups Group Unsubscribe By Mail",
					"action": "Invoke action unsubscribeByMail",
					"description": "Calling this method will disable the current user to receive email notifications for this group about new posts, events, and files in that group. Supported for Microsoft 365 groups only.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/microsoft.graph.unsubscribeByMail"
						}
					}
				},
				{
					"name": "Groups Group Validate Properties",
					"value": "Groups Group Validate Properties",
					"action": "Invoke action validateProperties",
					"description": "Validate if a Microsoft 365 group's display name or mail nickname complies with naming policies. Clients can use the API to determine if a display name or mail nickname is valid before trying to **update** a Microsoft 365 group. For validating properties before creating a group, use the validateProperties function for directory objects. The following validations are performed for the display name and mail nickname properties: This API returns with the first failure encountered. If one or more properties fail multiple validations, only the property with the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you are only validating the prefix and suffix naming policy.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/microsoft.graph.validateProperties"
						}
					}
				},
				{
					"name": "Groups Group Onenote Notebooks Get Notebook From Web Url",
					"value": "Groups Group Onenote Notebooks Get Notebook From Web Url",
					"action": "Invoke action getNotebookFromWebUrl",
					"description": "Retrieve the properties and relationships of a notebook object by using its URL path. The location can be user notebooks on Microsoft 365, group notebooks, or SharePoint site-hosted team notebooks on Microsoft 365.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/microsoft.graph.getNotebookFromWebUrl"
						}
					}
				},
				{
					"name": "Groups Group Onenote Notebooks Notebook Copy Notebook",
					"value": "Groups Group Onenote Notebooks Notebook Copy Notebook",
					"action": "Invoke action copyNotebook",
					"description": "Copies a notebook to the Notebooks folder in the destination Documents library. The folder is created if it doesn't exist. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/microsoft.graph.copyNotebook"
						}
					}
				},
				{
					"name": "Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Notebook",
					"value": "Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Notebook",
					"action": "Invoke action copyToNotebook",
					"description": "Copies a section to a specific notebook. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/microsoft.graph.copyToNotebook"
						}
					}
				},
				{
					"name": "Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Section Group",
					"value": "Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Section Group",
					"action": "Invoke action copyToSectionGroup",
					"description": "Copies a section to a specific section group. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/microsoft.graph.copyToSectionGroup"
						}
					}
				},
				{
					"name": "Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section",
					"value": "Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section",
					"action": "Invoke action copyToSection",
					"description": "Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.copyToSection"
						}
					}
				},
				{
					"name": "Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Onenote Patch Content",
					"value": "Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Onenote Patch Content",
					"action": "Invoke action onenotePatchContent",
					"description": "Invoke action onenotePatchContent",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.onenotePatchContent"
						}
					}
				},
				{
					"name": "Groups Group Onenote Notebooks Notebook Sections Onenote Section Copy To Notebook",
					"value": "Groups Group Onenote Notebooks Notebook Sections Onenote Section Copy To Notebook",
					"action": "Invoke action copyToNotebook",
					"description": "Copies a section to a specific notebook. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/microsoft.graph.copyToNotebook"
						}
					}
				},
				{
					"name": "Groups Group Onenote Notebooks Notebook Sections Onenote Section Copy To Section Group",
					"value": "Groups Group Onenote Notebooks Notebook Sections Onenote Section Copy To Section Group",
					"action": "Invoke action copyToSectionGroup",
					"description": "Copies a section to a specific section group. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/microsoft.graph.copyToSectionGroup"
						}
					}
				},
				{
					"name": "Groups Group Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Copy To Section",
					"value": "Groups Group Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Copy To Section",
					"action": "Invoke action copyToSection",
					"description": "Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.copyToSection"
						}
					}
				},
				{
					"name": "Groups Group Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Onenote Patch Content",
					"value": "Groups Group Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Onenote Patch Content",
					"action": "Invoke action onenotePatchContent",
					"description": "Invoke action onenotePatchContent",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.onenotePatchContent"
						}
					}
				},
				{
					"name": "Groups Group Onenote Pages Onenote Page Copy To Section",
					"value": "Groups Group Onenote Pages Onenote Page Copy To Section",
					"action": "Invoke action copyToSection",
					"description": "Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.copyToSection"
						}
					}
				},
				{
					"name": "Groups Group Onenote Pages Onenote Page Onenote Patch Content",
					"value": "Groups Group Onenote Pages Onenote Page Onenote Patch Content",
					"action": "Invoke action onenotePatchContent",
					"description": "Invoke action onenotePatchContent",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.onenotePatchContent"
						}
					}
				},
				{
					"name": "Groups Group Onenote Section Groups Section Group Sections Onenote Section Copy To Notebook",
					"value": "Groups Group Onenote Section Groups Section Group Sections Onenote Section Copy To Notebook",
					"action": "Invoke action copyToNotebook",
					"description": "Copies a section to a specific notebook. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/microsoft.graph.copyToNotebook"
						}
					}
				},
				{
					"name": "Groups Group Onenote Section Groups Section Group Sections Onenote Section Copy To Section Group",
					"value": "Groups Group Onenote Section Groups Section Group Sections Onenote Section Copy To Section Group",
					"action": "Invoke action copyToSectionGroup",
					"description": "Copies a section to a specific section group. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/microsoft.graph.copyToSectionGroup"
						}
					}
				},
				{
					"name": "Groups Group Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section",
					"value": "Groups Group Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section",
					"action": "Invoke action copyToSection",
					"description": "Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.copyToSection"
						}
					}
				},
				{
					"name": "Groups Group Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Onenote Patch Content",
					"value": "Groups Group Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Onenote Patch Content",
					"action": "Invoke action onenotePatchContent",
					"description": "Invoke action onenotePatchContent",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.onenotePatchContent"
						}
					}
				},
				{
					"name": "Groups Group Onenote Sections Onenote Section Copy To Notebook",
					"value": "Groups Group Onenote Sections Onenote Section Copy To Notebook",
					"action": "Invoke action copyToNotebook",
					"description": "Copies a section to a specific notebook. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/microsoft.graph.copyToNotebook"
						}
					}
				},
				{
					"name": "Groups Group Onenote Sections Onenote Section Copy To Section Group",
					"value": "Groups Group Onenote Sections Onenote Section Copy To Section Group",
					"action": "Invoke action copyToSectionGroup",
					"description": "Copies a section to a specific section group. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/microsoft.graph.copyToSectionGroup"
						}
					}
				},
				{
					"name": "Groups Group Onenote Sections Onenote Section Pages Onenote Page Copy To Section",
					"value": "Groups Group Onenote Sections Onenote Section Pages Onenote Page Copy To Section",
					"action": "Invoke action copyToSection",
					"description": "Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.copyToSection"
						}
					}
				},
				{
					"name": "Groups Group Onenote Sections Onenote Section Pages Onenote Page Onenote Patch Content",
					"value": "Groups Group Onenote Sections Onenote Section Pages Onenote Page Onenote Patch Content",
					"action": "Invoke action onenotePatchContent",
					"description": "Invoke action onenotePatchContent",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.onenotePatchContent"
						}
					}
				},
				{
					"name": "Groups Group Permission Grants Get By Ids",
					"value": "Groups Group Permission Grants Get By Ids",
					"action": "Invoke action getByIds",
					"description": "Return the directory objects specified in a list of IDs. Some common uses for this function are to:",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/permissionGrants/microsoft.graph.getByIds"
						}
					}
				},
				{
					"name": "Groups Group Permission Grants Get User Owned Objects",
					"value": "Groups Group Permission Grants Get User Owned Objects",
					"action": "Invoke action getUserOwnedObjects",
					"description": "Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn't support pagination.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/permissionGrants/microsoft.graph.getUserOwnedObjects"
						}
					}
				},
				{
					"name": "Groups Group Permission Grants Validate Properties",
					"value": "Groups Group Permission Grants Validate Properties",
					"action": "Invoke action validateProperties",
					"description": "Validate that a Microsoft 365 group's display name or mail nickname complies with naming policies.  Clients can use this API to determine whether a display name or mail nickname is valid before trying to **create** a Microsoft 365 group. For validating properties of an existing group, use the validateProperties function for groups. The following validations are performed for the display name and mail nickname properties: \n1. Validate the prefix and suffix naming policy\n2. Validate the custom banned words policy\n3. Validate the mail nickname is unique This API returns with the first failure encountered. If one or more properties fail multiple validations, only the property with the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you are only validating the prefix and suffix naming policy.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/permissionGrants/microsoft.graph.validateProperties"
						}
					}
				},
				{
					"name": "Groups Group Permission Grants Resource Specific Permission Grant Check Member Groups",
					"value": "Groups Group Permission Grants Resource Specific Permission Grant Check Member Groups",
					"action": "Invoke action checkMemberGroups",
					"description": "Check for membership in a specified list of group IDs, and return from that list those groups (identified by IDs) of which the specified user, group, service principal, organizational contact, device, or directory object is a member. This function is transitive. You can check up to a maximum of 20 groups per request. This function supports all groups provisioned in Azure AD. Because Microsoft 365 groups cannot contain other groups, membership in a Microsoft 365 group is always direct.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}/microsoft.graph.checkMemberGroups"
						}
					}
				},
				{
					"name": "Groups Group Permission Grants Resource Specific Permission Grant Check Member Objects",
					"value": "Groups Group Permission Grants Resource Specific Permission Grant Check Member Objects",
					"action": "Invoke action checkMemberObjects",
					"description": "Invoke action checkMemberObjects",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}/microsoft.graph.checkMemberObjects"
						}
					}
				},
				{
					"name": "Groups Group Permission Grants Resource Specific Permission Grant Get Member Groups",
					"value": "Groups Group Permission Grants Resource Specific Permission Grant Get Member Groups",
					"action": "Invoke action getMemberGroups",
					"description": "Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}/microsoft.graph.getMemberGroups"
						}
					}
				},
				{
					"name": "Groups Group Permission Grants Resource Specific Permission Grant Get Member Objects",
					"value": "Groups Group Permission Grants Resource Specific Permission Grant Get Member Objects",
					"action": "Invoke action getMemberObjects",
					"description": "Invoke action getMemberObjects",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}/microsoft.graph.getMemberObjects"
						}
					}
				},
				{
					"name": "Groups Group Permission Grants Resource Specific Permission Grant Restore",
					"value": "Groups Group Permission Grants Resource Specific Permission Grant Restore",
					"action": "Invoke action restore",
					"description": "Restore a recently deleted application, group, servicePrincipal, administrative unit, or user object from deleted items. If an item was accidentally deleted, you can fully restore the item. This is not applicable to security groups, which are deleted permanently. A recently deleted item will remain available for up to 30 days. After 30 days, the item is permanently deleted.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}/microsoft.graph.restore"
						}
					}
				},
				{
					"name": "Groups Group Sites Add",
					"value": "Groups Group Sites Add",
					"action": "Invoke action add",
					"description": "Follow a user's site or multiple sites.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/microsoft.graph.add"
						}
					}
				},
				{
					"name": "Groups Group Sites Remove",
					"value": "Groups Group Sites Remove",
					"action": "Invoke action remove",
					"description": "Unfollow a user's site or multiple sites.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/microsoft.graph.remove"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Content Types Add Copy",
					"value": "Groups Group Sites Site Content Types Add Copy",
					"action": "Invoke action addCopy",
					"description": "Add a copy of a [content type][contentType] from a [site][site] to a [list][list].",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/contentTypes/microsoft.graph.addCopy"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Content Types Add Copy From Content Type Hub",
					"value": "Groups Group Sites Site Content Types Add Copy From Content Type Hub",
					"action": "Invoke action addCopyFromContentTypeHub",
					"description": "Add or sync a copy of a published content type from the content type hub to a target site or a list. This method is part of the content type publishing changes to optimize the syncing of published content types to sites and lists, effectively switching from a 'push everywhere' to 'pull as needed' approach. The method allows users to pull content types directly from the content type hub to a site or list. For more information, see getCompatibleHubContentTypes and the blog post Syntex Product Updates – August 2021.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/contentTypes/microsoft.graph.addCopyFromContentTypeHub"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Content Types Content Type Associate With Hub Sites",
					"value": "Groups Group Sites Site Content Types Content Type Associate With Hub Sites",
					"action": "Invoke action associateWithHubSites",
					"description": "Associate a [content type][contentType] with a list of hub sites.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.associateWithHubSites"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Content Types Content Type Copy To Default Content Location",
					"value": "Groups Group Sites Site Content Types Content Type Copy To Default Content Location",
					"action": "Invoke action copyToDefaultContentLocation",
					"description": "Copy a file to a default content location in a [content type][contentType]. The file can then be added as a default file or template via a POST operation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.copyToDefaultContentLocation"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Content Types Content Type Publish",
					"value": "Groups Group Sites Site Content Types Content Type Publish",
					"action": "Invoke action publish",
					"description": "Publishes a [contentType][] present in a content type hub site.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.publish"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Content Types Content Type Unpublish",
					"value": "Groups Group Sites Site Content Types Content Type Unpublish",
					"action": "Invoke action unpublish",
					"description": "Unpublish a [contentType][] from a content type hub site.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.unpublish"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Information Protection Data Loss Prevention Policies Evaluate",
					"value": "Groups Group Sites Site Information Protection Data Loss Prevention Policies Evaluate",
					"action": "Invoke action evaluate",
					"description": "Invoke action evaluate",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/informationProtection/dataLossPreventionPolicies/microsoft.graph.evaluate"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Information Protection Sensitivity Labels Evaluate",
					"value": "Groups Group Sites Site Information Protection Sensitivity Labels Evaluate",
					"action": "Invoke action evaluate",
					"description": "Invoke action evaluate",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/informationProtection/sensitivityLabels/microsoft.graph.evaluate"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Information Protection Sensitivity Labels Sensitivity Label Sublabels Evaluate",
					"value": "Groups Group Sites Site Information Protection Sensitivity Labels Sensitivity Label Sublabels Evaluate",
					"action": "Invoke action evaluate",
					"description": "Invoke action evaluate",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/sublabels/microsoft.graph.evaluate"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Lists List Content Types Add Copy",
					"value": "Groups Group Sites Site Lists List Content Types Add Copy",
					"action": "Invoke action addCopy",
					"description": "Add a copy of a [content type][contentType] from a [site][site] to a [list][list].",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/microsoft.graph.addCopy"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Lists List Content Types Add Copy From Content Type Hub",
					"value": "Groups Group Sites Site Lists List Content Types Add Copy From Content Type Hub",
					"action": "Invoke action addCopyFromContentTypeHub",
					"description": "Add or sync a copy of a published content type from the content type hub to a target site or a list. This method is part of the content type publishing changes to optimize the syncing of published content types to sites and lists, effectively switching from a 'push everywhere' to 'pull as needed' approach. The method allows users to pull content types directly from the content type hub to a site or list. For more information, see getCompatibleHubContentTypes and the blog post Syntex Product Updates – August 2021.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/microsoft.graph.addCopyFromContentTypeHub"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Lists List Content Types Content Type Associate With Hub Sites",
					"value": "Groups Group Sites Site Lists List Content Types Content Type Associate With Hub Sites",
					"action": "Invoke action associateWithHubSites",
					"description": "Associate a [content type][contentType] with a list of hub sites.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.associateWithHubSites"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Lists List Content Types Content Type Copy To Default Content Location",
					"value": "Groups Group Sites Site Lists List Content Types Content Type Copy To Default Content Location",
					"action": "Invoke action copyToDefaultContentLocation",
					"description": "Copy a file to a default content location in a [content type][contentType]. The file can then be added as a default file or template via a POST operation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.copyToDefaultContentLocation"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Lists List Content Types Content Type Publish",
					"value": "Groups Group Sites Site Lists List Content Types Content Type Publish",
					"action": "Invoke action publish",
					"description": "Publishes a [contentType][] present in a content type hub site.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.publish"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Lists List Content Types Content Type Unpublish",
					"value": "Groups Group Sites Site Lists List Content Types Content Type Unpublish",
					"action": "Invoke action unpublish",
					"description": "Unpublish a [contentType][] from a content type hub site.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.unpublish"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Lists List Items List Item Document Set Versions Document Set Version Restore",
					"value": "Groups Group Sites Site Lists List Items List Item Document Set Versions Document Set Version Restore",
					"action": "Invoke action restore",
					"description": "Restore a document set version.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/documentSetVersions/{{$parameter[\"documentSetVersion-id\"]}}/microsoft.graph.restore"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Lists List Items List Item Create Link",
					"value": "Groups Group Sites Site Lists List Items List Item Create Link",
					"action": "Invoke action createLink",
					"description": "Create a sharing link for a listItem. The **createLink** action creates a new sharing link if the specified link type doesn't already exist for the calling application.\nIf a sharing link of the specified type already exists for the app, this action will return the existing sharing link. **listItem** resources inherit sharing permissions from the list the item resides in.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/microsoft.graph.createLink"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Lists List Items List Item Versions List Item Version Restore Version",
					"value": "Groups Group Sites Site Lists List Items List Item Versions List Item Version Restore Version",
					"action": "Invoke action restoreVersion",
					"description": "Invoke action restoreVersion",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/versions/{{$parameter[\"listItemVersion-id\"]}}/microsoft.graph.restoreVersion"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Lists List Subscriptions Subscription Reauthorize",
					"value": "Groups Group Sites Site Lists List Subscriptions Subscription Reauthorize",
					"action": "Invoke action reauthorize",
					"description": "Invoke action reauthorize",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/subscriptions/{{$parameter[\"subscription-id\"]}}/microsoft.graph.reauthorize"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Onenote Notebooks Get Notebook From Web Url",
					"value": "Groups Group Sites Site Onenote Notebooks Get Notebook From Web Url",
					"action": "Invoke action getNotebookFromWebUrl",
					"description": "Retrieve the properties and relationships of a notebook object by using its URL path. The location can be user notebooks on Microsoft 365, group notebooks, or SharePoint site-hosted team notebooks on Microsoft 365.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/microsoft.graph.getNotebookFromWebUrl"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Onenote Notebooks Notebook Copy Notebook",
					"value": "Groups Group Sites Site Onenote Notebooks Notebook Copy Notebook",
					"action": "Invoke action copyNotebook",
					"description": "Copies a notebook to the Notebooks folder in the destination Documents library. The folder is created if it doesn't exist. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/microsoft.graph.copyNotebook"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Notebook",
					"value": "Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Notebook",
					"action": "Invoke action copyToNotebook",
					"description": "Copies a section to a specific notebook. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/microsoft.graph.copyToNotebook"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Section Group",
					"value": "Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Section Group",
					"action": "Invoke action copyToSectionGroup",
					"description": "Copies a section to a specific section group. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/microsoft.graph.copyToSectionGroup"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section",
					"value": "Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section",
					"action": "Invoke action copyToSection",
					"description": "Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.copyToSection"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Onenote Patch Content",
					"value": "Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Onenote Patch Content",
					"action": "Invoke action onenotePatchContent",
					"description": "Invoke action onenotePatchContent",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.onenotePatchContent"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Notebook",
					"value": "Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Notebook",
					"action": "Invoke action copyToNotebook",
					"description": "Copies a section to a specific notebook. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/microsoft.graph.copyToNotebook"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Section Group",
					"value": "Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Section Group",
					"action": "Invoke action copyToSectionGroup",
					"description": "Copies a section to a specific section group. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/microsoft.graph.copyToSectionGroup"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Copy To Section",
					"value": "Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Copy To Section",
					"action": "Invoke action copyToSection",
					"description": "Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.copyToSection"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Onenote Patch Content",
					"value": "Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Onenote Patch Content",
					"action": "Invoke action onenotePatchContent",
					"description": "Invoke action onenotePatchContent",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.onenotePatchContent"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Onenote Pages Onenote Page Copy To Section",
					"value": "Groups Group Sites Site Onenote Pages Onenote Page Copy To Section",
					"action": "Invoke action copyToSection",
					"description": "Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.copyToSection"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Onenote Pages Onenote Page Onenote Patch Content",
					"value": "Groups Group Sites Site Onenote Pages Onenote Page Onenote Patch Content",
					"action": "Invoke action onenotePatchContent",
					"description": "Invoke action onenotePatchContent",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.onenotePatchContent"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Notebook",
					"value": "Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Notebook",
					"action": "Invoke action copyToNotebook",
					"description": "Copies a section to a specific notebook. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/microsoft.graph.copyToNotebook"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Section Group",
					"value": "Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Section Group",
					"action": "Invoke action copyToSectionGroup",
					"description": "Copies a section to a specific section group. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/microsoft.graph.copyToSectionGroup"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section",
					"value": "Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section",
					"action": "Invoke action copyToSection",
					"description": "Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.copyToSection"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Onenote Patch Content",
					"value": "Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Onenote Patch Content",
					"action": "Invoke action onenotePatchContent",
					"description": "Invoke action onenotePatchContent",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.onenotePatchContent"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Onenote Sections Onenote Section Copy To Notebook",
					"value": "Groups Group Sites Site Onenote Sections Onenote Section Copy To Notebook",
					"action": "Invoke action copyToNotebook",
					"description": "Copies a section to a specific notebook. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/microsoft.graph.copyToNotebook"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Onenote Sections Onenote Section Copy To Section Group",
					"value": "Groups Group Sites Site Onenote Sections Onenote Section Copy To Section Group",
					"action": "Invoke action copyToSectionGroup",
					"description": "Copies a section to a specific section group. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/microsoft.graph.copyToSectionGroup"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Onenote Sections Onenote Section Pages Onenote Page Copy To Section",
					"value": "Groups Group Sites Site Onenote Sections Onenote Section Pages Onenote Page Copy To Section",
					"action": "Invoke action copyToSection",
					"description": "Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.copyToSection"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Onenote Sections Onenote Section Pages Onenote Page Onenote Patch Content",
					"value": "Groups Group Sites Site Onenote Sections Onenote Section Pages Onenote Page Onenote Patch Content",
					"action": "Invoke action onenotePatchContent",
					"description": "Invoke action onenotePatchContent",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.onenotePatchContent"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Pages Site Page Canvas Layout Horizontal Sections Horizontal Section Columns Horizontal Section Column Webparts Web Part Get Position Of Web Part",
					"value": "Groups Group Sites Site Pages Site Page Canvas Layout Horizontal Sections Horizontal Section Columns Horizontal Section Column Webparts Web Part Get Position Of Web Part",
					"action": "Invoke action getPositionOfWebPart",
					"description": "Invoke action getPositionOfWebPart",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/horizontalSections/{{$parameter[\"horizontalSection-id\"]}}/columns/{{$parameter[\"horizontalSectionColumn-id\"]}}/webparts/{{$parameter[\"webPart-id\"]}}/microsoft.graph.getPositionOfWebPart"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Pages Site Page Canvas Layout Vertical Section Webparts Web Part Get Position Of Web Part",
					"value": "Groups Group Sites Site Pages Site Page Canvas Layout Vertical Section Webparts Web Part Get Position Of Web Part",
					"action": "Invoke action getPositionOfWebPart",
					"description": "Invoke action getPositionOfWebPart",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/verticalSection/webparts/{{$parameter[\"webPart-id\"]}}/microsoft.graph.getPositionOfWebPart"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Pages Site Page Get Web Parts By Position",
					"value": "Groups Group Sites Site Pages Site Page Get Web Parts By Position",
					"action": "Invoke action getWebPartsByPosition",
					"description": "Invoke action getWebPartsByPosition",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/microsoft.graph.getWebPartsByPosition"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Pages Site Page Publish",
					"value": "Groups Group Sites Site Pages Site Page Publish",
					"action": "Invoke action publish",
					"description": "Invoke action publish",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/microsoft.graph.publish"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Pages Site Page Web Parts Web Part Get Position Of Web Part",
					"value": "Groups Group Sites Site Pages Site Page Web Parts Web Part Get Position Of Web Part",
					"action": "Invoke action getPositionOfWebPart",
					"description": "Invoke action getPositionOfWebPart",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/webParts/{{$parameter[\"webPart-id\"]}}/microsoft.graph.getPositionOfWebPart"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Permissions Permission Grant",
					"value": "Groups Group Sites Site Permissions Permission Grant",
					"action": "Invoke action grant",
					"description": "Grant users access to a link represented by a [permission][].",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/permissions/{{$parameter[\"permission-id\"]}}/microsoft.graph.grant"
						}
					}
				},
				{
					"name": "Groups Group Sites Site Permissions Permission Revoke Grants",
					"value": "Groups Group Sites Site Permissions Permission Revoke Grants",
					"action": "Invoke action revokeGrants",
					"description": "Revoke access to a [listItem][] or [driveItem][] granted via a sharing link by removing the specified [recipient][] from the link.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/sites/{{$parameter[\"site-id\"]}}/permissions/{{$parameter[\"permission-id\"]}}/microsoft.graph.revokeGrants"
						}
					}
				},
				{
					"name": "Groups Group Team Channels Channel Members Add",
					"value": "Groups Group Team Channels Channel Members Add",
					"action": "Invoke action add",
					"description": "Add multiple members in a single request to a team. The response provides details about which memberships could and couldn't be created.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/members/microsoft.graph.add"
						}
					}
				},
				{
					"name": "Groups Group Team Channels Channel Messages Chat Message Set Reaction",
					"value": "Groups Group Team Channels Channel Messages Chat Message Set Reaction",
					"action": "Invoke action setReaction",
					"description": "Invoke action setReaction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/microsoft.graph.setReaction"
						}
					}
				},
				{
					"name": "Groups Group Team Channels Channel Messages Chat Message Soft Delete",
					"value": "Groups Group Team Channels Channel Messages Chat Message Soft Delete",
					"action": "Invoke action softDelete",
					"description": "Delete a single message or a message reply in a channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/microsoft.graph.softDelete"
						}
					}
				},
				{
					"name": "Groups Group Team Channels Channel Messages Chat Message Undo Soft Delete",
					"value": "Groups Group Team Channels Channel Messages Chat Message Undo Soft Delete",
					"action": "Invoke action undoSoftDelete",
					"description": "Undo soft deletion of a single message or a message reply in a channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/microsoft.graph.undoSoftDelete"
						}
					}
				},
				{
					"name": "Groups Group Team Channels Channel Messages Chat Message Unset Reaction",
					"value": "Groups Group Team Channels Channel Messages Chat Message Unset Reaction",
					"action": "Invoke action unsetReaction",
					"description": "Invoke action unsetReaction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/microsoft.graph.unsetReaction"
						}
					}
				},
				{
					"name": "Groups Group Team Channels Channel Messages Chat Message Replies Chat Message Set Reaction",
					"value": "Groups Group Team Channels Channel Messages Chat Message Replies Chat Message Set Reaction",
					"action": "Invoke action setReaction",
					"description": "Invoke action setReaction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/microsoft.graph.setReaction"
						}
					}
				},
				{
					"name": "Groups Group Team Channels Channel Messages Chat Message Replies Chat Message Soft Delete",
					"value": "Groups Group Team Channels Channel Messages Chat Message Replies Chat Message Soft Delete",
					"action": "Invoke action softDelete",
					"description": "Delete a single message or a message reply in a channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/microsoft.graph.softDelete"
						}
					}
				},
				{
					"name": "Groups Group Team Channels Channel Messages Chat Message Replies Chat Message Undo Soft Delete",
					"value": "Groups Group Team Channels Channel Messages Chat Message Replies Chat Message Undo Soft Delete",
					"action": "Invoke action undoSoftDelete",
					"description": "Undo soft deletion of a single message or a message reply in a channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/microsoft.graph.undoSoftDelete"
						}
					}
				},
				{
					"name": "Groups Group Team Channels Channel Messages Chat Message Replies Chat Message Unset Reaction",
					"value": "Groups Group Team Channels Channel Messages Chat Message Replies Chat Message Unset Reaction",
					"action": "Invoke action unsetReaction",
					"description": "Invoke action unsetReaction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/microsoft.graph.unsetReaction"
						}
					}
				},
				{
					"name": "Groups Group Team Channels Channel Complete Migration",
					"value": "Groups Group Team Channels Channel Complete Migration",
					"action": "Invoke action completeMigration",
					"description": "Complete the message migration process by removing `migration mode` from a channel in a team. `Migration mode` is a special state that prevents certain operations, like sending messages and adding members, during the data migration process. After a **completeMigration** request is made, you cannot import additional messages into the team. You can add members to the team after the request returns a successful response.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/microsoft.graph.completeMigration"
						}
					}
				},
				{
					"name": "Groups Group Team Channels Channel Provision Email",
					"value": "Groups Group Team Channels Channel Provision Email",
					"action": "Invoke action provisionEmail",
					"description": "Provision an email address for a channel. Microsoft Teams doesn't automatically provision an email address for a **channel** by default. To have Teams provision an email address, you can call **provisionEmail**, or through the Teams user interface, select **Get email address**, which triggers Teams to generate an email address if it has not already provisioned one. To remove the email address of a **channel**, use the removeEmail method.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/microsoft.graph.provisionEmail"
						}
					}
				},
				{
					"name": "Groups Group Team Channels Channel Remove Email",
					"value": "Groups Group Team Channels Channel Remove Email",
					"action": "Invoke action removeEmail",
					"description": "Remove the email address of a channel. You can remove an email address only if it was provisioned using the provisionEmail method or through the Microsoft Teams client.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/microsoft.graph.removeEmail"
						}
					}
				},
				{
					"name": "Groups Group Team Installed Apps Teams App Installation Upgrade",
					"value": "Groups Group Team Installed Apps Teams App Installation Upgrade",
					"action": "Invoke action upgrade",
					"description": "Upgrade an app installation within a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}/microsoft.graph.upgrade"
						}
					}
				},
				{
					"name": "Groups Group Team Members Add",
					"value": "Groups Group Team Members Add",
					"action": "Invoke action add",
					"description": "Add multiple members in a single request to a team. The response provides details about which memberships could and couldn't be created.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/members/microsoft.graph.add"
						}
					}
				},
				{
					"name": "Groups Group Team Archive",
					"value": "Groups Group Team Archive",
					"action": "Invoke action archive",
					"description": "Archive the specified team. \nWhen a team is archived, users can no longer send or like messages on any channel in the team, edit the team's name, description, or other settings, or in general make most changes to the team.\nMembership changes to the team continue to be allowed. Archiving is an async operation. A team is archived once the async operation completes successfully, which may occur subsequent to a response from this API. To archive a team, the team and group must have an owner. To restore a team from its archived state, use the API to unarchive.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/microsoft.graph.archive"
						}
					}
				},
				{
					"name": "Groups Group Team Clone",
					"value": "Groups Group Team Clone",
					"action": "Invoke action clone",
					"description": "Create a copy of a team. This operation also creates a copy of the corresponding group.\nYou can specify which parts of the team to clone: When tabs are cloned, they are put into an unconfigured state \n-- they are displayed on the tab bar in Microsoft Teams, and the first time you open them, you'll go through the configuration screen. \n(If the person opening the tab does not have permission to configure apps, they will see a message explaining that the tab hasn't been configured.) Cloning is a long-running operation.\nAfter the POST clone returns, you need to GET the operation \nreturned by the Location: header to see if it's 'running' or 'succeeded' or 'failed'. \nYou should continue to GET until the status is not 'running'. \nThe recommended delay between GETs is 5 seconds.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/microsoft.graph.clone"
						}
					}
				},
				{
					"name": "Groups Group Team Complete Migration",
					"value": "Groups Group Team Complete Migration",
					"action": "Invoke action completeMigration",
					"description": "Complete the message migration process by removing `migration mode` from a team. `Migration mode` is a special state where certain operations are barred, like message POST and membership operations during the data migration process. After a **completeMigration** request is made, you cannot import additional messages into the team. You can add members to the team after the request returns a successful response.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/microsoft.graph.completeMigration"
						}
					}
				},
				{
					"name": "Groups Group Team Send Activity Notification",
					"value": "Groups Group Team Send Activity Notification",
					"action": "Invoke action sendActivityNotification",
					"description": "Send an activity feed notification in the scope of a team. For more details about sending notifications and the requirements for doing so, see\nsending Teams activity notifications.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/microsoft.graph.sendActivityNotification"
						}
					}
				},
				{
					"name": "Groups Group Team Unarchive",
					"value": "Groups Group Team Unarchive",
					"action": "Invoke action unarchive",
					"description": "Restore an archived team. This restores users' ability to send messages and edit the team, abiding by tenant and team settings. Teams are archived using the archive API. Unarchiving is an async operation. A team is unarchived once the async operation completes successfully, which may occur subsequent to a response from this API.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/microsoft.graph.unarchive"
						}
					}
				},
				{
					"name": "Groups Group Team Permission Grants Get By Ids",
					"value": "Groups Group Team Permission Grants Get By Ids",
					"action": "Invoke action getByIds",
					"description": "Return the directory objects specified in a list of IDs. Some common uses for this function are to:",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/permissionGrants/microsoft.graph.getByIds"
						}
					}
				},
				{
					"name": "Groups Group Team Permission Grants Get User Owned Objects",
					"value": "Groups Group Team Permission Grants Get User Owned Objects",
					"action": "Invoke action getUserOwnedObjects",
					"description": "Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn't support pagination.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/permissionGrants/microsoft.graph.getUserOwnedObjects"
						}
					}
				},
				{
					"name": "Groups Group Team Permission Grants Validate Properties",
					"value": "Groups Group Team Permission Grants Validate Properties",
					"action": "Invoke action validateProperties",
					"description": "Validate that a Microsoft 365 group's display name or mail nickname complies with naming policies.  Clients can use this API to determine whether a display name or mail nickname is valid before trying to **create** a Microsoft 365 group. For validating properties of an existing group, use the validateProperties function for groups. The following validations are performed for the display name and mail nickname properties: \n1. Validate the prefix and suffix naming policy\n2. Validate the custom banned words policy\n3. Validate the mail nickname is unique This API returns with the first failure encountered. If one or more properties fail multiple validations, only the property with the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you are only validating the prefix and suffix naming policy.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/permissionGrants/microsoft.graph.validateProperties"
						}
					}
				},
				{
					"name": "Groups Group Team Permission Grants Resource Specific Permission Grant Check Member Groups",
					"value": "Groups Group Team Permission Grants Resource Specific Permission Grant Check Member Groups",
					"action": "Invoke action checkMemberGroups",
					"description": "Check for membership in a specified list of group IDs, and return from that list those groups (identified by IDs) of which the specified user, group, service principal, organizational contact, device, or directory object is a member. This function is transitive. You can check up to a maximum of 20 groups per request. This function supports all groups provisioned in Azure AD. Because Microsoft 365 groups cannot contain other groups, membership in a Microsoft 365 group is always direct.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}/microsoft.graph.checkMemberGroups"
						}
					}
				},
				{
					"name": "Groups Group Team Permission Grants Resource Specific Permission Grant Check Member Objects",
					"value": "Groups Group Team Permission Grants Resource Specific Permission Grant Check Member Objects",
					"action": "Invoke action checkMemberObjects",
					"description": "Invoke action checkMemberObjects",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}/microsoft.graph.checkMemberObjects"
						}
					}
				},
				{
					"name": "Groups Group Team Permission Grants Resource Specific Permission Grant Get Member Groups",
					"value": "Groups Group Team Permission Grants Resource Specific Permission Grant Get Member Groups",
					"action": "Invoke action getMemberGroups",
					"description": "Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}/microsoft.graph.getMemberGroups"
						}
					}
				},
				{
					"name": "Groups Group Team Permission Grants Resource Specific Permission Grant Get Member Objects",
					"value": "Groups Group Team Permission Grants Resource Specific Permission Grant Get Member Objects",
					"action": "Invoke action getMemberObjects",
					"description": "Invoke action getMemberObjects",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}/microsoft.graph.getMemberObjects"
						}
					}
				},
				{
					"name": "Groups Group Team Permission Grants Resource Specific Permission Grant Restore",
					"value": "Groups Group Team Permission Grants Resource Specific Permission Grant Restore",
					"action": "Invoke action restore",
					"description": "Restore a recently deleted application, group, servicePrincipal, administrative unit, or user object from deleted items. If an item was accidentally deleted, you can fully restore the item. This is not applicable to security groups, which are deleted permanently. A recently deleted item will remain available for up to 30 days. After 30 days, the item is permanently deleted.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}/microsoft.graph.restore"
						}
					}
				},
				{
					"name": "Groups Group Team Primary Channel Members Add",
					"value": "Groups Group Team Primary Channel Members Add",
					"action": "Invoke action add",
					"description": "Add multiple members in a single request to a team. The response provides details about which memberships could and couldn't be created.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/members/microsoft.graph.add"
						}
					}
				},
				{
					"name": "Groups Group Team Primary Channel Messages Chat Message Set Reaction",
					"value": "Groups Group Team Primary Channel Messages Chat Message Set Reaction",
					"action": "Invoke action setReaction",
					"description": "Invoke action setReaction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/microsoft.graph.setReaction"
						}
					}
				},
				{
					"name": "Groups Group Team Primary Channel Messages Chat Message Soft Delete",
					"value": "Groups Group Team Primary Channel Messages Chat Message Soft Delete",
					"action": "Invoke action softDelete",
					"description": "Delete a single message or a message reply in a channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/microsoft.graph.softDelete"
						}
					}
				},
				{
					"name": "Groups Group Team Primary Channel Messages Chat Message Undo Soft Delete",
					"value": "Groups Group Team Primary Channel Messages Chat Message Undo Soft Delete",
					"action": "Invoke action undoSoftDelete",
					"description": "Undo soft deletion of a single message or a message reply in a channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/microsoft.graph.undoSoftDelete"
						}
					}
				},
				{
					"name": "Groups Group Team Primary Channel Messages Chat Message Unset Reaction",
					"value": "Groups Group Team Primary Channel Messages Chat Message Unset Reaction",
					"action": "Invoke action unsetReaction",
					"description": "Invoke action unsetReaction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/microsoft.graph.unsetReaction"
						}
					}
				},
				{
					"name": "Groups Group Team Primary Channel Messages Chat Message Replies Chat Message Set Reaction",
					"value": "Groups Group Team Primary Channel Messages Chat Message Replies Chat Message Set Reaction",
					"action": "Invoke action setReaction",
					"description": "Invoke action setReaction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/microsoft.graph.setReaction"
						}
					}
				},
				{
					"name": "Groups Group Team Primary Channel Messages Chat Message Replies Chat Message Soft Delete",
					"value": "Groups Group Team Primary Channel Messages Chat Message Replies Chat Message Soft Delete",
					"action": "Invoke action softDelete",
					"description": "Delete a single message or a message reply in a channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/microsoft.graph.softDelete"
						}
					}
				},
				{
					"name": "Groups Group Team Primary Channel Messages Chat Message Replies Chat Message Undo Soft Delete",
					"value": "Groups Group Team Primary Channel Messages Chat Message Replies Chat Message Undo Soft Delete",
					"action": "Invoke action undoSoftDelete",
					"description": "Undo soft deletion of a single message or a message reply in a channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/microsoft.graph.undoSoftDelete"
						}
					}
				},
				{
					"name": "Groups Group Team Primary Channel Messages Chat Message Replies Chat Message Unset Reaction",
					"value": "Groups Group Team Primary Channel Messages Chat Message Replies Chat Message Unset Reaction",
					"action": "Invoke action unsetReaction",
					"description": "Invoke action unsetReaction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/microsoft.graph.unsetReaction"
						}
					}
				},
				{
					"name": "Groups Group Team Primary Channel Complete Migration",
					"value": "Groups Group Team Primary Channel Complete Migration",
					"action": "Invoke action completeMigration",
					"description": "Complete the message migration process by removing `migration mode` from a channel in a team. `Migration mode` is a special state that prevents certain operations, like sending messages and adding members, during the data migration process. After a **completeMigration** request is made, you cannot import additional messages into the team. You can add members to the team after the request returns a successful response.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/microsoft.graph.completeMigration"
						}
					}
				},
				{
					"name": "Groups Group Team Primary Channel Provision Email",
					"value": "Groups Group Team Primary Channel Provision Email",
					"action": "Invoke action provisionEmail",
					"description": "Provision an email address for a channel. Microsoft Teams doesn't automatically provision an email address for a **channel** by default. To have Teams provision an email address, you can call **provisionEmail**, or through the Teams user interface, select **Get email address**, which triggers Teams to generate an email address if it has not already provisioned one. To remove the email address of a **channel**, use the removeEmail method.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/microsoft.graph.provisionEmail"
						}
					}
				},
				{
					"name": "Groups Group Team Primary Channel Remove Email",
					"value": "Groups Group Team Primary Channel Remove Email",
					"action": "Invoke action removeEmail",
					"description": "Remove the email address of a channel. You can remove an email address only if it was provisioned using the provisionEmail method or through the Microsoft Teams client.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/microsoft.graph.removeEmail"
						}
					}
				},
				{
					"name": "Groups Group Team Schedule Share",
					"value": "Groups Group Team Schedule Share",
					"action": "Invoke action share",
					"description": "Share a schedule time range with schedule members.\nMake the collections of shift, openshift and timeOff items in the specified time range of the schedule viewable by the specified team members, including employees and managers.\nEach shift, openshift and timeOff instance in a schedule supports a draft version and a shared version of the item. The draft version is viewable by only managers, and the shared version is viewable by employees and managers. For each shift, openshift and timeOff instance in the specified time range, the share action updates the shared version from the draft version, so that in addition to managers, employees can also view the most current information about the item. The **notifyTeam** parameter further specifies which employees can view the item.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/microsoft.graph.share"
						}
					}
				},
				{
					"name": "Groups Group Team Schedule Time Cards Clock In",
					"value": "Groups Group Team Schedule Time Cards Clock In",
					"action": "Invoke action clockIn",
					"description": "Clock in to start a timeCard.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timeCards/microsoft.graph.clockIn"
						}
					}
				},
				{
					"name": "Groups Group Team Schedule Time Cards Time Card Clock Out",
					"value": "Groups Group Team Schedule Time Cards Time Card Clock Out",
					"action": "Invoke action clockOut",
					"description": "Clock out to end an open timeCard.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timeCards/{{$parameter[\"timeCard-id\"]}}/microsoft.graph.clockOut"
						}
					}
				},
				{
					"name": "Groups Group Team Schedule Time Cards Time Card Confirm",
					"value": "Groups Group Team Schedule Time Cards Time Card Confirm",
					"action": "Invoke action confirm",
					"description": "Confirm a specific timeCard.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timeCards/{{$parameter[\"timeCard-id\"]}}/microsoft.graph.confirm"
						}
					}
				},
				{
					"name": "Groups Group Team Schedule Time Cards Time Card End Break",
					"value": "Groups Group Team Schedule Time Cards Time Card End Break",
					"action": "Invoke action endBreak",
					"description": "End the open break in a specific timeCard.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timeCards/{{$parameter[\"timeCard-id\"]}}/microsoft.graph.endBreak"
						}
					}
				},
				{
					"name": "Groups Group Team Schedule Time Cards Time Card Start Break",
					"value": "Groups Group Team Schedule Time Cards Time Card Start Break",
					"action": "Invoke action startBreak",
					"description": "Start a break in a specific timeCard.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timeCards/{{$parameter[\"timeCard-id\"]}}/microsoft.graph.startBreak"
						}
					}
				},
				{
					"name": "Groups Group Threads Conversation Thread Reply",
					"value": "Groups Group Threads Conversation Thread Reply",
					"action": "Invoke action reply",
					"description": "Add an attachment when creating a group post.  This operation limits the size of the attachment you can add to under 3 MB. An attachment can be one of the following types: All these types of attachment resources are derived from the attachment\nresource. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/microsoft.graph.reply"
						}
					}
				},
				{
					"name": "Groups Group Threads Conversation Thread Posts Post Attachments Create Upload Session",
					"value": "Groups Group Threads Conversation Thread Posts Post Attachments Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/attachments/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Groups Group Threads Conversation Thread Posts Post In Reply To Attachments Create Upload Session",
					"value": "Groups Group Threads Conversation Thread Posts Post In Reply To Attachments Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Create an upload session that allows an app to iteratively upload ranges of a file, so as to attach the file to an Outlook item. The item can be a message or event. Use this approach to attach a file if the file size is between 3 MB and 150 MB. To attach a file that's smaller than 3 MB, do a `POST` operation on the **attachments** navigation property of the Outlook item; see how to do this for a message or for an event.  As part of the response, this action returns an upload URL that you can use in subsequent sequential `PUT` queries. Request headers for each `PUT` operation let you specify the exact range of bytes to be uploaded. This allows transfer to be resumed, in case the network connection is dropped during upload.  The following are the steps to attach a file to an Outlook item using an upload session: See attach large files to Outlook messages or events for an example.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/attachments/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Groups Group Threads Conversation Thread Posts Post In Reply To Forward",
					"value": "Groups Group Threads Conversation Thread Posts Post In Reply To Forward",
					"action": "Invoke action forward",
					"description": "Forward a post to a recipient. You can specify both the parent conversation and thread in the request, \nor, you can specify just the parent thread without the parent conversation. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/microsoft.graph.forward"
						}
					}
				},
				{
					"name": "Groups Group Threads Conversation Thread Posts Post In Reply To Reply",
					"value": "Groups Group Threads Conversation Thread Posts Post In Reply To Reply",
					"action": "Invoke action reply",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/microsoft.graph.reply"
						}
					}
				},
				{
					"name": "Groups Group Threads Conversation Thread Posts Post Forward",
					"value": "Groups Group Threads Conversation Thread Posts Post Forward",
					"action": "Invoke action forward",
					"description": "Forward a post to a recipient. You can specify both the parent conversation and thread in the request, \nor, you can specify just the parent thread without the parent conversation. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/microsoft.graph.forward"
						}
					}
				},
				{
					"name": "Groups Group Threads Conversation Thread Posts Post Reply",
					"value": "Groups Group Threads Conversation Thread Posts Post Reply",
					"action": "Invoke action reply",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/microsoft.graph.reply"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /groups/microsoft.graph.evaluateDynamicMembership",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Evaluate Dynamic Membership"
					]
				}
			}
		},
		{
			"displayName": "Member Id",
			"name": "memberId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "memberId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Evaluate Dynamic Membership"
					]
				}
			}
		},
		{
			"displayName": "Membership Rule",
			"name": "membershipRule",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "membershipRule",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Evaluate Dynamic Membership"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/microsoft.graph.getByIds",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Get By Ids"
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
						"Groups Actions"
					],
					"operation": [
						"Groups Get By Ids"
					]
				}
			}
		},
		{
			"displayName": "Types",
			"name": "types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Get By Ids"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/microsoft.graph.getUserOwnedObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Get User Owned Objects"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Get User Owned Objects"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Get User Owned Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/microsoft.graph.validateProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "Entity Type",
			"name": "entityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "entityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "Mail Nickname",
			"name": "mailNickname",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "mailNickname",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "On Behalf Of User Id",
			"name": "onBehalfOfUserId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "onBehalfOfUserId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/attachments/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Attachment Item",
			"name": "AttachmentItem",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "AttachmentItem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/exceptionOccurrences/{event-id1}/attachments/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Attachment Item",
			"name": "AttachmentItem",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "AttachmentItem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/attachments/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Attachment Item",
			"name": "AttachmentItem",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "AttachmentItem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.decline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.dismissReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Dismiss Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.forward",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Forward"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Forward"
					]
				}
			}
		},
		{
			"displayName": "To Recipients",
			"name": "ToRecipients",
			"type": "json",
			"default": "[\n  {\n    \"emailAddress\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "ToRecipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Forward"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.snoozeReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "New Reminder Time",
			"name": "NewReminderTime",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "NewReminderTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.tentativelyAccept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.decline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.dismissReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Dismiss Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.forward",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Forward"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Forward"
					]
				}
			}
		},
		{
			"displayName": "To Recipients",
			"name": "ToRecipients",
			"type": "json",
			"default": "[\n  {\n    \"emailAddress\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "ToRecipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Forward"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.snoozeReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "New Reminder Time",
			"name": "NewReminderTime",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "NewReminderTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.tentativelyAccept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/instances/{event-id1}/attachments/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Attachment Item",
			"name": "AttachmentItem",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "AttachmentItem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Attachment Item",
			"name": "AttachmentItem",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "AttachmentItem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.decline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.dismissReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Dismiss Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.forward",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Forward"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Forward"
					]
				}
			}
		},
		{
			"displayName": "To Recipients",
			"name": "ToRecipients",
			"type": "json",
			"default": "[\n  {\n    \"emailAddress\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "ToRecipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Forward"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.snoozeReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "New Reminder Time",
			"name": "NewReminderTime",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "NewReminderTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.tentativelyAccept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/instances/{event-id1}/microsoft.graph.accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/instances/{event-id1}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/instances/{event-id1}/microsoft.graph.decline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/instances/{event-id1}/microsoft.graph.dismissReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Dismiss Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/instances/{event-id1}/microsoft.graph.forward",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Forward"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Forward"
					]
				}
			}
		},
		{
			"displayName": "To Recipients",
			"name": "ToRecipients",
			"type": "json",
			"default": "[\n  {\n    \"emailAddress\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "ToRecipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Forward"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/instances/{event-id1}/microsoft.graph.snoozeReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "New Reminder Time",
			"name": "NewReminderTime",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "NewReminderTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/instances/{event-id1}/microsoft.graph.tentativelyAccept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/microsoft.graph.accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/microsoft.graph.decline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Decline"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/microsoft.graph.dismissReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Dismiss Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/microsoft.graph.forward",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Forward"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Forward"
					]
				}
			}
		},
		{
			"displayName": "To Recipients",
			"name": "ToRecipients",
			"type": "json",
			"default": "[\n  {\n    \"emailAddress\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "ToRecipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Forward"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/microsoft.graph.snoozeReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "New Reminder Time",
			"name": "NewReminderTime",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "NewReminderTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/calendarView/{event-id}/microsoft.graph.tentativelyAccept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Calendar View Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/attachments/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Attachment Item",
			"name": "AttachmentItem",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "AttachmentItem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/exceptionOccurrences/{event-id1}/attachments/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Attachment Item",
			"name": "AttachmentItem",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "AttachmentItem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/attachments/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Instances Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Attachment Item",
			"name": "AttachmentItem",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "AttachmentItem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Instances Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Instances Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Instances Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Instances Event Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Instances Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Instances Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.decline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.dismissReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Instances Event Dismiss Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.forward",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Instances Event Forward"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Instances Event Forward"
					]
				}
			}
		},
		{
			"displayName": "To Recipients",
			"name": "ToRecipients",
			"type": "json",
			"default": "[\n  {\n    \"emailAddress\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "ToRecipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Instances Event Forward"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.snoozeReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Instances Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "New Reminder Time",
			"name": "NewReminderTime",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "NewReminderTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Instances Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.tentativelyAccept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.decline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.dismissReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Dismiss Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.forward",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Forward"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Forward"
					]
				}
			}
		},
		{
			"displayName": "To Recipients",
			"name": "ToRecipients",
			"type": "json",
			"default": "[\n  {\n    \"emailAddress\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "ToRecipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Forward"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.snoozeReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "New Reminder Time",
			"name": "NewReminderTime",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "NewReminderTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.tentativelyAccept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/instances/{event-id1}/attachments/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Attachment Item",
			"name": "AttachmentItem",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "AttachmentItem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Exception Occurrences Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Attachment Item",
			"name": "AttachmentItem",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "AttachmentItem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Exception Occurrences Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Exception Occurrences Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Exception Occurrences Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Exception Occurrences Event Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Exception Occurrences Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Exception Occurrences Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.decline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.dismissReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Exception Occurrences Event Dismiss Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.forward",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Exception Occurrences Event Forward"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Exception Occurrences Event Forward"
					]
				}
			}
		},
		{
			"displayName": "To Recipients",
			"name": "ToRecipients",
			"type": "json",
			"default": "[\n  {\n    \"emailAddress\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "ToRecipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Exception Occurrences Event Forward"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.snoozeReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Exception Occurrences Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "New Reminder Time",
			"name": "NewReminderTime",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "NewReminderTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Exception Occurrences Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.tentativelyAccept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/instances/{event-id1}/microsoft.graph.accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/instances/{event-id1}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/instances/{event-id1}/microsoft.graph.decline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/instances/{event-id1}/microsoft.graph.dismissReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Dismiss Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/instances/{event-id1}/microsoft.graph.forward",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Forward"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Forward"
					]
				}
			}
		},
		{
			"displayName": "To Recipients",
			"name": "ToRecipients",
			"type": "json",
			"default": "[\n  {\n    \"emailAddress\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "ToRecipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Forward"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/instances/{event-id1}/microsoft.graph.snoozeReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "New Reminder Time",
			"name": "NewReminderTime",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "NewReminderTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/instances/{event-id1}/microsoft.graph.tentativelyAccept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/microsoft.graph.accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/microsoft.graph.decline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Decline"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/microsoft.graph.dismissReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Dismiss Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/microsoft.graph.forward",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Forward"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Forward"
					]
				}
			}
		},
		{
			"displayName": "To Recipients",
			"name": "ToRecipients",
			"type": "json",
			"default": "[\n  {\n    \"emailAddress\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "ToRecipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Forward"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/microsoft.graph.snoozeReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "New Reminder Time",
			"name": "NewReminderTime",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "NewReminderTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/events/{event-id}/microsoft.graph.tentativelyAccept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Events Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendar/microsoft.graph.getSchedule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Get Schedule"
					]
				}
			}
		},
		{
			"displayName": "Availability View Interval",
			"name": "AvailabilityViewInterval",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "AvailabilityViewInterval",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Get Schedule"
					]
				}
			}
		},
		{
			"displayName": "End Time",
			"name": "EndTime",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "EndTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Get Schedule"
					]
				}
			}
		},
		{
			"displayName": "Schedules",
			"name": "Schedules",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "Schedules",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Get Schedule"
					]
				}
			}
		},
		{
			"displayName": "Start Time",
			"name": "StartTime",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "StartTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar Get Schedule"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/attachments/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Attachment Item",
			"name": "AttachmentItem",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "AttachmentItem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/attachments/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Attachment Item",
			"name": "AttachmentItem",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "AttachmentItem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/attachments/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Instances Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Attachment Item",
			"name": "AttachmentItem",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "AttachmentItem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Instances Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Instances Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Instances Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Instances Event Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Instances Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Instances Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.decline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.dismissReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Instances Event Dismiss Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.forward",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Instances Event Forward"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Instances Event Forward"
					]
				}
			}
		},
		{
			"displayName": "To Recipients",
			"name": "ToRecipients",
			"type": "json",
			"default": "[\n  {\n    \"emailAddress\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "ToRecipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Instances Event Forward"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.snoozeReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Instances Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "New Reminder Time",
			"name": "NewReminderTime",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "NewReminderTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Instances Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.tentativelyAccept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.decline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.dismissReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Dismiss Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.forward",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Forward"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Forward"
					]
				}
			}
		},
		{
			"displayName": "To Recipients",
			"name": "ToRecipients",
			"type": "json",
			"default": "[\n  {\n    \"emailAddress\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "ToRecipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Forward"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.snoozeReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "New Reminder Time",
			"name": "NewReminderTime",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "NewReminderTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.tentativelyAccept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/attachments/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Attachment Item",
			"name": "AttachmentItem",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "AttachmentItem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Exception Occurrences Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Attachment Item",
			"name": "AttachmentItem",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "AttachmentItem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Exception Occurrences Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Exception Occurrences Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Exception Occurrences Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Exception Occurrences Event Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Exception Occurrences Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Exception Occurrences Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.decline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.dismissReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Exception Occurrences Event Dismiss Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.forward",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Exception Occurrences Event Forward"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Exception Occurrences Event Forward"
					]
				}
			}
		},
		{
			"displayName": "To Recipients",
			"name": "ToRecipients",
			"type": "json",
			"default": "[\n  {\n    \"emailAddress\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "ToRecipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Exception Occurrences Event Forward"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.snoozeReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Exception Occurrences Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "New Reminder Time",
			"name": "NewReminderTime",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "NewReminderTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Exception Occurrences Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.tentativelyAccept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/microsoft.graph.accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/microsoft.graph.decline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/microsoft.graph.dismissReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Dismiss Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/microsoft.graph.forward",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Forward"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Forward"
					]
				}
			}
		},
		{
			"displayName": "To Recipients",
			"name": "ToRecipients",
			"type": "json",
			"default": "[\n  {\n    \"emailAddress\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "ToRecipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Forward"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/microsoft.graph.snoozeReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "New Reminder Time",
			"name": "NewReminderTime",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "NewReminderTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/microsoft.graph.tentativelyAccept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/microsoft.graph.accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/microsoft.graph.decline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Decline"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/microsoft.graph.dismissReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Dismiss Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/microsoft.graph.forward",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Forward"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Forward"
					]
				}
			}
		},
		{
			"displayName": "To Recipients",
			"name": "ToRecipients",
			"type": "json",
			"default": "[\n  {\n    \"emailAddress\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "ToRecipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Forward"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/microsoft.graph.snoozeReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "New Reminder Time",
			"name": "NewReminderTime",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "NewReminderTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/microsoft.graph.tentativelyAccept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Calendar View Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/microsoft.graph.reply",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Conversations Conversation Threads Conversation Thread Reply"
					]
				}
			}
		},
		{
			"displayName": "Post",
			"name": "Post",
			"type": "string",
			"default": {
				"categories": [
					null
				]
			},
			"routing": {
				"send": {
					"property": "Post",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Conversations Conversation Threads Conversation Thread Reply"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Conversations Conversation Threads Conversation Thread Posts Post Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Attachment Item",
			"name": "AttachmentItem",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "AttachmentItem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Conversations Conversation Threads Conversation Thread Posts Post Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Conversations Conversation Threads Conversation Thread Posts Post In Reply To Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Attachment Item",
			"name": "AttachmentItem",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "AttachmentItem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Conversations Conversation Threads Conversation Thread Posts Post In Reply To Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/microsoft.graph.forward",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Conversations Conversation Threads Conversation Thread Posts Post In Reply To Forward"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Conversations Conversation Threads Conversation Thread Posts Post In Reply To Forward"
					]
				}
			}
		},
		{
			"displayName": "To Recipients",
			"name": "ToRecipients",
			"type": "json",
			"default": "[\n  {\n    \"emailAddress\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "ToRecipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Conversations Conversation Threads Conversation Thread Posts Post In Reply To Forward"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/microsoft.graph.reply",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Conversations Conversation Threads Conversation Thread Posts Post In Reply To Reply"
					]
				}
			}
		},
		{
			"displayName": "Post",
			"name": "Post",
			"type": "string",
			"default": {
				"categories": [
					null
				]
			},
			"routing": {
				"send": {
					"property": "Post",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Conversations Conversation Threads Conversation Thread Posts Post In Reply To Reply"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/microsoft.graph.forward",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Conversations Conversation Threads Conversation Thread Posts Post Forward"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Conversations Conversation Threads Conversation Thread Posts Post Forward"
					]
				}
			}
		},
		{
			"displayName": "To Recipients",
			"name": "ToRecipients",
			"type": "json",
			"default": "[\n  {\n    \"emailAddress\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "ToRecipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Conversations Conversation Threads Conversation Thread Posts Post Forward"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/microsoft.graph.reply",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Conversations Conversation Threads Conversation Thread Posts Post Reply"
					]
				}
			}
		},
		{
			"displayName": "Post",
			"name": "Post",
			"type": "string",
			"default": {
				"categories": [
					null
				]
			},
			"routing": {
				"send": {
					"property": "Post",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Conversations Conversation Threads Conversation Thread Posts Post Reply"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/attachments/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Attachment Item",
			"name": "AttachmentItem",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "AttachmentItem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/attachments/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Attachment Item",
			"name": "AttachmentItem",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "AttachmentItem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/attachments/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Instances Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Attachment Item",
			"name": "AttachmentItem",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "AttachmentItem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Instances Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Instances Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Instances Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Instances Event Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Instances Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Instances Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.decline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.dismissReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Instances Event Dismiss Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.forward",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Instances Event Forward"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Instances Event Forward"
					]
				}
			}
		},
		{
			"displayName": "To Recipients",
			"name": "ToRecipients",
			"type": "json",
			"default": "[\n  {\n    \"emailAddress\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "ToRecipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Instances Event Forward"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.snoozeReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Instances Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "New Reminder Time",
			"name": "NewReminderTime",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "NewReminderTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Instances Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/microsoft.graph.tentativelyAccept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.decline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.dismissReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Dismiss Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.forward",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Forward"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Forward"
					]
				}
			}
		},
		{
			"displayName": "To Recipients",
			"name": "ToRecipients",
			"type": "json",
			"default": "[\n  {\n    \"emailAddress\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "ToRecipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Forward"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.snoozeReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "New Reminder Time",
			"name": "NewReminderTime",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "NewReminderTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/microsoft.graph.tentativelyAccept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/attachments/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Attachment Item",
			"name": "AttachmentItem",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "AttachmentItem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Exception Occurrences Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Attachment Item",
			"name": "AttachmentItem",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "AttachmentItem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Exception Occurrences Event Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Exception Occurrences Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Exception Occurrences Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Exception Occurrences Event Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Exception Occurrences Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Exception Occurrences Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.decline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Exception Occurrences Event Decline"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.dismissReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Exception Occurrences Event Dismiss Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.forward",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Exception Occurrences Event Forward"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Exception Occurrences Event Forward"
					]
				}
			}
		},
		{
			"displayName": "To Recipients",
			"name": "ToRecipients",
			"type": "json",
			"default": "[\n  {\n    \"emailAddress\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "ToRecipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Exception Occurrences Event Forward"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.snoozeReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Exception Occurrences Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "New Reminder Time",
			"name": "NewReminderTime",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "NewReminderTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Exception Occurrences Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/microsoft.graph.tentativelyAccept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Exception Occurrences Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/microsoft.graph.accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/microsoft.graph.decline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Decline"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/microsoft.graph.dismissReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Dismiss Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/microsoft.graph.forward",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Forward"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Forward"
					]
				}
			}
		},
		{
			"displayName": "To Recipients",
			"name": "ToRecipients",
			"type": "json",
			"default": "[\n  {\n    \"emailAddress\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "ToRecipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Forward"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/microsoft.graph.snoozeReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "New Reminder Time",
			"name": "NewReminderTime",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "NewReminderTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/microsoft.graph.tentativelyAccept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Instances Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/microsoft.graph.accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/microsoft.graph.decline",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Decline"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Decline"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/microsoft.graph.dismissReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Dismiss Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/microsoft.graph.forward",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Forward"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Forward"
					]
				}
			}
		},
		{
			"displayName": "To Recipients",
			"name": "ToRecipients",
			"type": "json",
			"default": "[\n  {\n    \"emailAddress\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "ToRecipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Forward"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/microsoft.graph.snoozeReminder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "New Reminder Time",
			"name": "NewReminderTime",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "NewReminderTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Snooze Reminder"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/microsoft.graph.tentativelyAccept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Proposed New Time",
			"name": "ProposedNewTime",
			"type": "json",
			"default": "{\n  \"end\": {},\n  \"start\": {}\n}",
			"routing": {
				"send": {
					"property": "ProposedNewTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "Send Response",
			"name": "SendResponse",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "SendResponse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Events Event Tentatively Accept"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/groupLifecyclePolicies/microsoft.graph.renewGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Group Lifecycle Policies Renew Group"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Group Lifecycle Policies Renew Group"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/microsoft.graph.addGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Group Lifecycle Policies Group Lifecycle Policy Add Group"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Group Lifecycle Policies Group Lifecycle Policy Add Group"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/microsoft.graph.removeGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Group Lifecycle Policies Group Lifecycle Policy Remove Group"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Group Lifecycle Policies Group Lifecycle Policy Remove Group"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/microsoft.graph.addFavorite",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Add Favorite"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/microsoft.graph.assignLicense",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Assign License"
					]
				}
			}
		},
		{
			"displayName": "Add Licenses",
			"name": "addLicenses",
			"type": "json",
			"default": "[\n  {\n    \"disabledPlans\": [\n      null\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "addLicenses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Assign License"
					]
				}
			}
		},
		{
			"displayName": "Remove Licenses",
			"name": "removeLicenses",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "removeLicenses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Assign License"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/microsoft.graph.checkGrantedPermissionsForApp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Check Granted Permissions For App"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/microsoft.graph.checkMemberGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Check Member Groups"
					]
				}
			}
		},
		{
			"displayName": "Group Ids",
			"name": "groupIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Check Member Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/microsoft.graph.checkMemberObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Check Member Objects"
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
						"Groups Actions"
					],
					"operation": [
						"Groups Group Check Member Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/microsoft.graph.evaluateDynamicMembership",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Evaluate Dynamic Membership"
					]
				}
			}
		},
		{
			"displayName": "Member Id",
			"name": "memberId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "memberId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Evaluate Dynamic Membership"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/microsoft.graph.getMemberGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Get Member Groups"
					]
				}
			}
		},
		{
			"displayName": "Security Enabled Only",
			"name": "securityEnabledOnly",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "securityEnabledOnly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Get Member Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/microsoft.graph.getMemberObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Get Member Objects"
					]
				}
			}
		},
		{
			"displayName": "Security Enabled Only",
			"name": "securityEnabledOnly",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "securityEnabledOnly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Get Member Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/microsoft.graph.removeFavorite",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Remove Favorite"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/microsoft.graph.renew",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Renew"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/microsoft.graph.resetUnseenCount",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Reset Unseen Count"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/microsoft.graph.restore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Restore"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/microsoft.graph.subscribeByMail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Subscribe By Mail"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/microsoft.graph.unsubscribeByMail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Unsubscribe By Mail"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/microsoft.graph.validateProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "Mail Nickname",
			"name": "mailNickname",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "mailNickname",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "On Behalf Of User Id",
			"name": "onBehalfOfUserId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "onBehalfOfUserId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/notebooks/microsoft.graph.getNotebookFromWebUrl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Get Notebook From Web Url"
					]
				}
			}
		},
		{
			"displayName": "Web Url",
			"name": "webUrl",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "webUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Get Notebook From Web Url"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/notebooks/{notebook-id}/microsoft.graph.copyNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Copy Notebook"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Copy Notebook"
					]
				}
			}
		},
		{
			"displayName": "Notebook Folder",
			"name": "notebookFolder",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "notebookFolder",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Copy Notebook"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Copy Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Copy Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Copy Notebook"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/microsoft.graph.copyToNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/microsoft.graph.copyToSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.copyToSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.onenotePatchContent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "Commands",
			"name": "commands",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "commands",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/microsoft.graph.copyToNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/microsoft.graph.copyToSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.copyToSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.onenotePatchContent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "Commands",
			"name": "commands",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "commands",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/pages/{onenotePage-id}/microsoft.graph.copyToSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/pages/{onenotePage-id}/microsoft.graph.onenotePatchContent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "Commands",
			"name": "commands",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "commands",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/microsoft.graph.copyToNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/microsoft.graph.copyToSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.copyToSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.onenotePatchContent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "Commands",
			"name": "commands",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "commands",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/sections/{onenoteSection-id}/microsoft.graph.copyToNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/sections/{onenoteSection-id}/microsoft.graph.copyToSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.copyToSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.onenotePatchContent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Sections Onenote Section Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "Commands",
			"name": "commands",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "commands",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Onenote Sections Onenote Section Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/permissionGrants/microsoft.graph.getByIds",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Permission Grants Get By Ids"
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
						"Groups Actions"
					],
					"operation": [
						"Groups Group Permission Grants Get By Ids"
					]
				}
			}
		},
		{
			"displayName": "Types",
			"name": "types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Permission Grants Get By Ids"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/permissionGrants/microsoft.graph.getUserOwnedObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Permission Grants Get User Owned Objects"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Permission Grants Get User Owned Objects"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Permission Grants Get User Owned Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/permissionGrants/microsoft.graph.validateProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Permission Grants Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Permission Grants Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "Entity Type",
			"name": "entityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "entityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Permission Grants Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "Mail Nickname",
			"name": "mailNickname",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "mailNickname",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Permission Grants Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "On Behalf Of User Id",
			"name": "onBehalfOfUserId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "onBehalfOfUserId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Permission Grants Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}/microsoft.graph.checkMemberGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Permission Grants Resource Specific Permission Grant Check Member Groups"
					]
				}
			}
		},
		{
			"displayName": "Group Ids",
			"name": "groupIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Permission Grants Resource Specific Permission Grant Check Member Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}/microsoft.graph.checkMemberObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Permission Grants Resource Specific Permission Grant Check Member Objects"
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
						"Groups Actions"
					],
					"operation": [
						"Groups Group Permission Grants Resource Specific Permission Grant Check Member Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}/microsoft.graph.getMemberGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Permission Grants Resource Specific Permission Grant Get Member Groups"
					]
				}
			}
		},
		{
			"displayName": "Security Enabled Only",
			"name": "securityEnabledOnly",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "securityEnabledOnly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Permission Grants Resource Specific Permission Grant Get Member Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}/microsoft.graph.getMemberObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Permission Grants Resource Specific Permission Grant Get Member Objects"
					]
				}
			}
		},
		{
			"displayName": "Security Enabled Only",
			"name": "securityEnabledOnly",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "securityEnabledOnly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Permission Grants Resource Specific Permission Grant Get Member Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/permissionGrants/{resourceSpecificPermissionGrant-id}/microsoft.graph.restore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Permission Grants Resource Specific Permission Grant Restore"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/microsoft.graph.add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Add"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "[\n  {\n    \"@odata.type\": \"#microsoft.graph.site\",\n    \"createdBy\": {\n      \"application\": {},\n      \"device\": {},\n      \"user\": {}\n    },\n    \"createdByUser\": {\n      \"@odata.type\": \"#microsoft.graph.user\",\n      \"activities\": [\n        {\n          \"contentInfo\": {},\n          \"historyItems\": [\n            {\n              \"activity\": {}\n            }\n          ],\n          \"status\": {},\n          \"visualElements\": {\n            \"attribution\": {},\n            \"content\": {}\n          }\n        }\n      ],\n      \"agreementAcceptances\": [\n        {}\n      ],\n      \"analytics\": {\n        \"activityStatistics\": [\n          {}\n        ],\n        \"settings\": {}\n      },\n      \"appConsentRequestsForApproval\": [\n        {\n          \"pendingScopes\": [\n            {}\n          ],\n          \"userConsentRequests\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.userConsentRequest\",\n              \"createdBy\": {},\n              \"approval\": {\n                \"steps\": [\n                  {\n                    \"reviewedBy\": {}\n                  }\n                ]\n              }\n            }\n          ]\n        }\n      ],\n      \"appRoleAssignedResources\": [\n        {\n          \"@odata.type\": \"#microsoft.graph.servicePrincipal\",\n          \"addIns\": [\n            {\n              \"properties\": [\n                {}\n              ]\n            }\n          ],\n          \"alternativeNames\": [\n            null\n          ],\n          \"appManagementPolicies\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.appManagementPolicy\",\n              \"appliesTo\": [\n                {}\n              ],\n              \"restrictions\": {\n                \"keyCredentials\": [\n                  {}\n                ],\n                \"passwordCredentials\": [\n                  {}\n                ]\n              }\n            }\n          ],\n          \"appRoleAssignedTo\": [\n            {}\n          ],\n          \"appRoleAssignments\": [\n            {}\n          ],\n          \"appRoles\": [\n            {\n              \"allowedMemberTypes\": [\n                null\n              ]\n            }\n          ],\n          \"claimsMappingPolicies\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.claimsMappingPolicy\",\n              \"appliesTo\": [\n                {}\n              ],\n              \"definition\": [\n                null\n              ]\n            }\n          ],\n          \"createdObjects\": [\n            {}\n          ],\n          \"customSecurityAttributes\": {},\n          \"delegatedPermissionClassifications\": [\n            {}\n          ],\n          \"endpoints\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.endpoint\"\n            }\n          ],\n          \"federatedIdentityCredentials\": [\n            {\n              \"audiences\": [\n                null\n              ]\n            }\n          ],\n          \"homeRealmDiscoveryPolicies\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.homeRealmDiscoveryPolicy\"\n            }\n          ],\n          \"info\": {},\n          \"keyCredentials\": [\n            {}\n          ],\n          \"licenseDetails\": [\n            {\n              \"servicePlans\": [\n                {}\n              ]\n            }\n          ],\n          \"memberOf\": [\n            {}\n          ],\n          \"notificationEmailAddresses\": [\n            null\n          ],\n          \"oauth2PermissionGrants\": [\n            {}\n          ],\n          \"ownedObjects\": [\n            {}\n          ],\n          \"owners\": [\n            {}\n          ],\n          \"passwordCredentials\": [\n            {}\n          ],\n          \"passwordSingleSignOnSettings\": {\n            \"fields\": [\n              {}\n            ]\n          },\n          \"publishedPermissionScopes\": [\n            {}\n          ],\n          \"replyUrls\": [\n            null\n          ],\n          \"samlSingleSignOnSettings\": {},\n          \"servicePrincipalNames\": [\n            null\n          ],\n          \"synchronization\": {\n            \"jobs\": [\n              {\n                \"schedule\": {},\n                \"schema\": {\n                  \"directories\": [\n                    {\n                      \"objects\": [\n                        {\n                          \"attributes\": [\n                            {\n                              \"apiExpressions\": [\n                                {}\n                              ],\n                              \"metadata\": [\n                                {}\n                              ],\n                              \"referencedObjects\": [\n                                {}\n                              ]\n                            }\n                          ],\n                          \"metadata\": [\n                            {}\n                          ],\n                          \"supportedApis\": [\n                            null\n                          ]\n                        }\n                      ]\n                    }\n                  ],\n                  \"synchronizationRules\": [\n                    {\n                      \"metadata\": [\n                        {}\n                      ],\n                      \"objectMappings\": [\n                        {\n                          \"attributeMappings\": [\n                            {\n                              \"source\": {\n                                \"parameters\": [\n                                  {\n                                    \"value\": {}\n                                  }\n                                ]\n                              }\n                            }\n                          ],\n                          \"metadata\": [\n                            {}\n                          ],\n                          \"scope\": {\n                            \"categoryFilterGroups\": [\n                              {\n                                \"clauses\": [\n                                  {\n                                    \"targetOperand\": {\n                                      \"values\": [\n                                        null\n                                      ]\n                                    }\n                                  }\n                                ]\n                              }\n                            ],\n                            \"groups\": [\n                              {}\n                            ],\n                            \"inputFilterGroups\": [\n                              {}\n                            ]\n                          }\n                        }\n                      ]\n                    }\n                  ]\n                },\n                \"status\": {\n                  \"lastExecution\": {\n                    \"error\": {}\n                  },\n                  \"lastSuccessfulExecution\": {},\n                  \"lastSuccessfulExecutionWithExports\": {},\n                  \"progress\": [\n                    {}\n                  ],\n                  \"quarantine\": {\n                    \"error\": {}\n                  },\n                  \"synchronizedEntryCountByType\": [\n                    {}\n                  ]\n                },\n                \"synchronizationJobSettings\": [\n                  {}\n                ]\n              }\n            ],\n            \"secrets\": [\n              {}\n            ],\n            \"templates\": [\n              {\n                \"metadata\": [\n                  {}\n                ],\n                \"schema\": {}\n              }\n            ]\n          },\n          \"tags\": [\n            null\n          ],\n          \"tokenIssuancePolicies\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.tokenIssuancePolicy\"\n            }\n          ],\n          \"tokenLifetimePolicies\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.tokenLifetimePolicy\"\n            }\n          ],\n          \"transitiveMemberOf\": [\n            {}\n          ],\n          \"verifiedPublisher\": {}\n        }\n      ],\n      \"appRoleAssignments\": [\n        {}\n      ],\n      \"approvals\": [\n        {}\n      ],\n      \"assignedLicenses\": [\n        {\n          \"disabledPlans\": [\n            null\n          ]\n        }\n      ],\n      \"assignedPlans\": [\n        {}\n      ],\n      \"authentication\": {\n        \"emailMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.emailAuthenticationMethod\"\n          }\n        ],\n        \"fido2Methods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.fido2AuthenticationMethod\",\n            \"attestationCertificates\": [\n              null\n            ]\n          }\n        ],\n        \"methods\": [\n          {}\n        ],\n        \"microsoftAuthenticatorMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.microsoftAuthenticatorAuthenticationMethod\",\n            \"device\": {\n              \"@odata.type\": \"#microsoft.graph.device\",\n              \"alternativeSecurityIds\": [\n                {}\n              ],\n              \"commands\": [\n                {\n                  \"payload\": {},\n                  \"responsepayload\": {}\n                }\n              ],\n              \"extensionAttributes\": {},\n              \"extensions\": [\n                {}\n              ],\n              \"hostnames\": [\n                null\n              ],\n              \"memberOf\": [\n                {}\n              ],\n              \"physicalIds\": [\n                null\n              ],\n              \"registeredOwners\": [\n                {}\n              ],\n              \"registeredUsers\": [\n                {}\n              ],\n              \"systemLabels\": [\n                null\n              ],\n              \"transitiveMemberOf\": [\n                {}\n              ],\n              \"usageRights\": [\n                {}\n              ]\n            }\n          }\n        ],\n        \"operations\": [\n          {}\n        ],\n        \"passwordMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.passwordAuthenticationMethod\"\n          }\n        ],\n        \"passwordlessMicrosoftAuthenticatorMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.passwordlessMicrosoftAuthenticatorAuthenticationMethod\",\n            \"device\": {}\n          }\n        ],\n        \"phoneMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.phoneAuthenticationMethod\"\n          }\n        ],\n        \"softwareOathMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.softwareOathAuthenticationMethod\"\n          }\n        ],\n        \"temporaryAccessPassMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.temporaryAccessPassAuthenticationMethod\"\n          }\n        ],\n        \"windowsHelloForBusinessMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.windowsHelloForBusinessAuthenticationMethod\",\n            \"device\": {}\n          }\n        ]\n      },\n      \"authorizationInfo\": {\n        \"certificateUserIds\": [\n          null\n        ]\n      },\n      \"businessPhones\": [\n        null\n      ],\n      \"calendar\": {\n        \"allowedOnlineMeetingProviders\": [\n          null\n        ],\n        \"calendarPermissions\": [\n          {\n            \"allowedRoles\": [\n              null\n            ],\n            \"emailAddress\": {},\n            \"role\": {}\n          }\n        ],\n        \"calendarView\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.event\",\n            \"categories\": [\n              null\n            ],\n            \"attachments\": [\n              {}\n            ],\n            \"attendees\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.attendee\",\n                \"emailAddress\": {},\n                \"proposedNewTime\": {\n                  \"end\": {},\n                  \"start\": {}\n                },\n                \"status\": {}\n              }\n            ],\n            \"body\": {},\n            \"calendar\": {},\n            \"cancelledOccurrences\": [\n              null\n            ],\n            \"end\": {},\n            \"exceptionOccurrences\": [\n              {}\n            ],\n            \"extensions\": [\n              {}\n            ],\n            \"instances\": [\n              {}\n            ],\n            \"location\": {\n              \"address\": {},\n              \"coordinates\": {}\n            },\n            \"locations\": [\n              {}\n            ],\n            \"multiValueExtendedProperties\": [\n              {\n                \"value\": [\n                  null\n                ]\n              }\n            ],\n            \"onlineMeeting\": {\n              \"phones\": [\n                {}\n              ],\n              \"tollFreeNumbers\": [\n                null\n              ]\n            },\n            \"onlineMeetingProvider\": {},\n            \"organizer\": {},\n            \"recurrence\": {\n              \"pattern\": {\n                \"daysOfWeek\": [\n                  null\n                ],\n                \"firstDayOfWeek\": {}\n              },\n              \"range\": {}\n            },\n            \"responseStatus\": {},\n            \"singleValueExtendedProperties\": [\n              {}\n            ],\n            \"start\": {}\n          }\n        ],\n        \"defaultOnlineMeetingProvider\": {},\n        \"events\": [\n          {}\n        ],\n        \"multiValueExtendedProperties\": [\n          {}\n        ],\n        \"owner\": {},\n        \"singleValueExtendedProperties\": [\n          {}\n        ]\n      },\n      \"calendarGroups\": [\n        {\n          \"calendars\": [\n            {}\n          ]\n        }\n      ],\n      \"calendarView\": [\n        {}\n      ],\n      \"calendars\": [\n        {}\n      ],\n      \"chats\": [\n        {\n          \"installedApps\": [\n            {\n              \"teamsApp\": {\n                \"appDefinitions\": [\n                  {\n                    \"bot\": {},\n                    \"colorIcon\": {\n                      \"hostedContent\": {}\n                    },\n                    \"createdBy\": {},\n                    \"outlineIcon\": {}\n                  }\n                ]\n              },\n              \"teamsAppDefinition\": {}\n            }\n          ],\n          \"lastMessagePreview\": {\n            \"body\": {},\n            \"eventDetail\": {},\n            \"from\": {\n              \"@odata.type\": \"#microsoft.graph.chatMessageFromIdentitySet\"\n            }\n          },\n          \"members\": [\n            {\n              \"roles\": [\n                null\n              ]\n            }\n          ],\n          \"messages\": [\n            {\n              \"attachments\": [\n                {}\n              ],\n              \"body\": {},\n              \"channelIdentity\": {},\n              \"eventDetail\": {},\n              \"from\": {},\n              \"hostedContents\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.chatMessageHostedContent\"\n                }\n              ],\n              \"mentions\": [\n                {\n                  \"mentioned\": {\n                    \"@odata.type\": \"#microsoft.graph.chatMessageMentionedIdentitySet\",\n                    \"conversation\": {\n                      \"@odata.type\": \"#microsoft.graph.teamworkConversationIdentity\"\n                    },\n                    \"tag\": {\n                      \"@odata.type\": \"#microsoft.graph.teamworkTagIdentity\"\n                    }\n                  }\n                }\n              ],\n              \"messageHistory\": [\n                {\n                  \"reaction\": {\n                    \"user\": {\n                      \"@odata.type\": \"#microsoft.graph.chatMessageReactionIdentitySet\"\n                    }\n                  }\n                }\n              ],\n              \"messageType\": {},\n              \"onBehalfOf\": {},\n              \"policyViolation\": {\n                \"policyTip\": {\n                  \"matchedConditionDescriptions\": [\n                    null\n                  ]\n                }\n              },\n              \"reactions\": [\n                {}\n              ],\n              \"replies\": [\n                {}\n              ]\n            }\n          ],\n          \"onlineMeetingInfo\": {\n            \"organizer\": {\n              \"@odata.type\": \"#microsoft.graph.teamworkUserIdentity\"\n            }\n          },\n          \"operations\": [\n            {\n              \"error\": {}\n            }\n          ],\n          \"permissionGrants\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.resourceSpecificPermissionGrant\"\n            }\n          ],\n          \"pinnedMessages\": [\n            {\n              \"message\": {}\n            }\n          ],\n          \"tabs\": [\n            {\n              \"configuration\": {},\n              \"teamsApp\": {}\n            }\n          ],\n          \"viewpoint\": {}\n        }\n      ],\n      \"cloudPCs\": [\n        {\n          \"connectivityResult\": {\n            \"failedHealthCheckItems\": [\n              {}\n            ]\n          },\n          \"lastLoginResult\": {},\n          \"lastRemoteActionResult\": {\n            \"statusDetails\": {\n              \"additionalInformation\": [\n                {}\n              ]\n            }\n          },\n          \"partnerAgentInstallResults\": [\n            {}\n          ],\n          \"statusDetails\": {}\n        }\n      ],\n      \"contactFolders\": [\n        {\n          \"childFolders\": [\n            {}\n          ],\n          \"contacts\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.contact\",\n              \"children\": [\n                null\n              ],\n              \"emailAddresses\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.typedEmailAddress\"\n                }\n              ],\n              \"extensions\": [\n                {}\n              ],\n              \"flag\": {\n                \"completedDateTime\": {},\n                \"dueDateTime\": {},\n                \"startDateTime\": {}\n              },\n              \"imAddresses\": [\n                null\n              ],\n              \"multiValueExtendedProperties\": [\n                {}\n              ],\n              \"phones\": [\n                {}\n              ],\n              \"photo\": {},\n              \"postalAddresses\": [\n                {}\n              ],\n              \"singleValueExtendedProperties\": [\n                {}\n              ],\n              \"websites\": [\n                {}\n              ]\n            }\n          ],\n          \"multiValueExtendedProperties\": [\n            {}\n          ],\n          \"singleValueExtendedProperties\": [\n            {}\n          ]\n        }\n      ],\n      \"contacts\": [\n        {}\n      ],\n      \"createdObjects\": [\n        {}\n      ],\n      \"customSecurityAttributes\": {},\n      \"deviceEnrollmentConfigurations\": [\n        {\n          \"assignments\": [\n            {\n              \"target\": {}\n            }\n          ],\n          \"roleScopeTagIds\": [\n            null\n          ]\n        }\n      ],\n      \"deviceKeys\": [\n        {}\n      ],\n      \"deviceManagementTroubleshootingEvents\": [\n        {\n          \"additionalInformation\": [\n            {}\n          ],\n          \"troubleshootingErrorDetails\": {\n            \"resources\": [\n              {}\n            ]\n          }\n        }\n      ],\n      \"devices\": [\n        {}\n      ],\n      \"directReports\": [\n        {}\n      ],\n      \"drive\": {\n        \"@odata.type\": \"#microsoft.graph.drive\",\n        \"activities\": [\n          {\n            \"action\": {\n              \"comment\": {\n                \"parentAuthor\": {},\n                \"participants\": [\n                  {}\n                ]\n              },\n              \"create\": {},\n              \"delete\": {},\n              \"edit\": {},\n              \"mention\": {\n                \"mentionees\": [\n                  {}\n                ]\n              },\n              \"move\": {},\n              \"rename\": {},\n              \"restore\": {},\n              \"share\": {\n                \"recipients\": [\n                  {}\n                ]\n              },\n              \"version\": {}\n            },\n            \"actor\": {},\n            \"driveItem\": {\n              \"@odata.type\": \"#microsoft.graph.driveItem\",\n              \"activities\": [\n                {}\n              ],\n              \"analytics\": {\n                \"allTime\": {\n                  \"access\": {},\n                  \"activities\": [\n                    {\n                      \"access\": {},\n                      \"actor\": {},\n                      \"driveItem\": {}\n                    }\n                  ],\n                  \"create\": {},\n                  \"delete\": {},\n                  \"edit\": {},\n                  \"incompleteData\": {},\n                  \"move\": {}\n                },\n                \"itemActivityStats\": [\n                  {}\n                ],\n                \"lastSevenDays\": {}\n              },\n              \"audio\": {},\n              \"bundle\": {\n                \"album\": {}\n              },\n              \"children\": [\n                {}\n              ],\n              \"deleted\": {},\n              \"file\": {\n                \"hashes\": {}\n              },\n              \"fileSystemInfo\": {},\n              \"folder\": {\n                \"view\": {}\n              },\n              \"image\": {},\n              \"listItem\": {\n                \"@odata.type\": \"#microsoft.graph.listItem\",\n                \"activities\": [\n                  {}\n                ],\n                \"analytics\": {},\n                \"contentType\": {},\n                \"deleted\": {},\n                \"documentSetVersions\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.documentSetVersion\",\n                    \"lastModifiedBy\": {},\n                    \"publication\": {},\n                    \"fields\": {},\n                    \"createdBy\": {},\n                    \"items\": [\n                      {}\n                    ]\n                  }\n                ],\n                \"driveItem\": {},\n                \"fields\": {},\n                \"sharepointIds\": {},\n                \"versions\": [\n                  {}\n                ]\n              },\n              \"location\": {},\n              \"malware\": {},\n              \"media\": {\n                \"mediaSource\": {}\n              },\n              \"package\": {},\n              \"pendingOperations\": {\n                \"pendingContentUpdate\": {}\n              },\n              \"permissions\": [\n                {\n                  \"grantedTo\": {},\n                  \"grantedToIdentities\": [\n                    {}\n                  ],\n                  \"grantedToIdentitiesV2\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.sharePointIdentitySet\",\n                      \"group\": {},\n                      \"siteGroup\": {\n                        \"@odata.type\": \"#microsoft.graph.sharePointIdentity\"\n                      },\n                      \"siteUser\": {}\n                    }\n                  ],\n                  \"grantedToV2\": {},\n                  \"inheritedFrom\": {\n                    \"sharepointIds\": {}\n                  },\n                  \"invitation\": {\n                    \"invitedBy\": {}\n                  },\n                  \"link\": {\n                    \"application\": {}\n                  },\n                  \"roles\": [\n                    null\n                  ]\n                }\n              ],\n              \"photo\": {},\n              \"publication\": {},\n              \"remoteItem\": {\n                \"createdBy\": {},\n                \"file\": {},\n                \"fileSystemInfo\": {},\n                \"folder\": {},\n                \"image\": {},\n                \"lastModifiedBy\": {},\n                \"package\": {},\n                \"parentReference\": {},\n                \"shared\": {\n                  \"owner\": {},\n                  \"sharedBy\": {}\n                },\n                \"sharepointIds\": {},\n                \"specialFolder\": {},\n                \"video\": {}\n              },\n              \"root\": {},\n              \"searchResult\": {},\n              \"shared\": {},\n              \"sharepointIds\": {},\n              \"source\": {},\n              \"specialFolder\": {},\n              \"subscriptions\": [\n                {}\n              ],\n              \"thumbnails\": [\n                {\n                  \"large\": {},\n                  \"medium\": {},\n                  \"small\": {},\n                  \"source\": {}\n                }\n              ],\n              \"versions\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.driveItemVersion\"\n                }\n              ],\n              \"video\": {},\n              \"workbook\": {\n                \"application\": {},\n                \"comments\": [\n                  {\n                    \"replies\": [\n                      {}\n                    ]\n                  }\n                ],\n                \"functions\": {},\n                \"names\": [\n                  {\n                    \"value\": {},\n                    \"worksheet\": {\n                      \"charts\": [\n                        {\n                          \"axes\": {\n                            \"categoryAxis\": {\n                              \"format\": {\n                                \"font\": {},\n                                \"line\": {}\n                              },\n                              \"majorGridlines\": {\n                                \"format\": {\n                                  \"line\": {}\n                                }\n                              },\n                              \"majorUnit\": {},\n                              \"maximum\": {},\n                              \"minimum\": {},\n                              \"minorGridlines\": {},\n                              \"minorUnit\": {},\n                              \"title\": {\n                                \"format\": {\n                                  \"font\": {}\n                                }\n                              }\n                            },\n                            \"seriesAxis\": {},\n                            \"valueAxis\": {}\n                          },\n                          \"dataLabels\": {\n                            \"format\": {\n                              \"fill\": {},\n                              \"font\": {}\n                            }\n                          },\n                          \"format\": {\n                            \"fill\": {},\n                            \"font\": {}\n                          },\n                          \"legend\": {\n                            \"format\": {\n                              \"fill\": {},\n                              \"font\": {}\n                            }\n                          },\n                          \"series\": [\n                            {\n                              \"format\": {\n                                \"fill\": {},\n                                \"line\": {}\n                              },\n                              \"points\": [\n                                {\n                                  \"format\": {\n                                    \"fill\": {}\n                                  },\n                                  \"value\": {}\n                                }\n                              ]\n                            }\n                          ],\n                          \"title\": {\n                            \"format\": {\n                              \"fill\": {},\n                              \"font\": {}\n                            }\n                          },\n                          \"worksheet\": {}\n                        }\n                      ],\n                      \"names\": [\n                        {}\n                      ],\n                      \"pivotTables\": [\n                        {\n                          \"worksheet\": {}\n                        }\n                      ],\n                      \"protection\": {\n                        \"options\": {}\n                      },\n                      \"tables\": [\n                        {\n                          \"columns\": [\n                            {\n                              \"filter\": {\n                                \"criteria\": {\n                                  \"icon\": {},\n                                  \"values\": {}\n                                }\n                              },\n                              \"values\": {}\n                            }\n                          ],\n                          \"rows\": [\n                            {\n                              \"values\": {}\n                            }\n                          ],\n                          \"sort\": {\n                            \"fields\": [\n                              {\n                                \"icon\": {}\n                              }\n                            ]\n                          },\n                          \"worksheet\": {}\n                        }\n                      ]\n                    }\n                  }\n                ],\n                \"operations\": [\n                  {\n                    \"error\": {\n                      \"innerError\": {}\n                    }\n                  }\n                ],\n                \"tables\": [\n                  {}\n                ],\n                \"worksheets\": [\n                  {}\n                ]\n              }\n            },\n            \"listItem\": {},\n            \"times\": {}\n          }\n        ],\n        \"bundles\": [\n          {}\n        ],\n        \"following\": [\n          {}\n        ],\n        \"items\": [\n          {}\n        ],\n        \"list\": {\n          \"@odata.type\": \"#microsoft.graph.list\",\n          \"activities\": [\n            {}\n          ],\n          \"columns\": [\n            {\n              \"boolean\": {},\n              \"calculated\": {},\n              \"choice\": {\n                \"choices\": [\n                  null\n                ]\n              },\n              \"contentApprovalStatus\": {},\n              \"currency\": {},\n              \"dateTime\": {},\n              \"defaultValue\": {},\n              \"geolocation\": {},\n              \"hyperlinkOrPicture\": {},\n              \"lookup\": {},\n              \"number\": {},\n              \"personOrGroup\": {},\n              \"sourceColumn\": {},\n              \"sourceContentType\": {},\n              \"term\": {\n                \"parentTerm\": {\n                  \"children\": [\n                    {}\n                  ],\n                  \"descriptions\": [\n                    {}\n                  ],\n                  \"labels\": [\n                    {}\n                  ],\n                  \"properties\": [\n                    {}\n                  ],\n                  \"relations\": [\n                    {\n                      \"fromTerm\": {},\n                      \"set\": {\n                        \"children\": [\n                          {}\n                        ],\n                        \"localizedNames\": [\n                          {}\n                        ],\n                        \"parentGroup\": {\n                          \"sets\": [\n                            {}\n                          ]\n                        },\n                        \"properties\": [\n                          {}\n                        ],\n                        \"relations\": [\n                          {}\n                        ],\n                        \"terms\": [\n                          {}\n                        ]\n                      },\n                      \"toTerm\": {}\n                    }\n                  ],\n                  \"set\": {}\n                },\n                \"termSet\": {}\n              },\n              \"text\": {},\n              \"thumbnail\": {},\n              \"validation\": {\n                \"descriptions\": [\n                  {}\n                ]\n              }\n            }\n          ],\n          \"contentTypes\": [\n            {\n              \"associatedHubsUrls\": [\n                null\n              ],\n              \"base\": {},\n              \"baseTypes\": [\n                {}\n              ],\n              \"columnLinks\": [\n                {}\n              ],\n              \"columnPositions\": [\n                {}\n              ],\n              \"columns\": [\n                {}\n              ],\n              \"documentSet\": {\n                \"allowedContentTypes\": [\n                  {}\n                ],\n                \"defaultContents\": [\n                  {\n                    \"contentType\": {}\n                  }\n                ],\n                \"sharedColumns\": [\n                  {}\n                ],\n                \"welcomePageColumns\": [\n                  {}\n                ]\n              },\n              \"documentTemplate\": {},\n              \"inheritedFrom\": {},\n              \"order\": {}\n            }\n          ],\n          \"drive\": {},\n          \"items\": [\n            {}\n          ],\n          \"list\": {},\n          \"operations\": [\n            {\n              \"error\": {\n                \"details\": [\n                  {}\n                ],\n                \"innerError\": {\n                  \"details\": [\n                    {}\n                  ]\n                }\n              }\n            }\n          ],\n          \"sharepointIds\": {},\n          \"subscriptions\": [\n            {}\n          ],\n          \"system\": {}\n        },\n        \"owner\": {},\n        \"quota\": {\n          \"storagePlanInformation\": {}\n        },\n        \"root\": {},\n        \"sharePointIds\": {},\n        \"special\": [\n          {}\n        ],\n        \"system\": {}\n      },\n      \"drives\": [\n        {}\n      ],\n      \"employeeOrgData\": {},\n      \"events\": [\n        {}\n      ],\n      \"extensions\": [\n        {}\n      ],\n      \"followedSites\": [\n        {}\n      ],\n      \"identities\": [\n        {}\n      ],\n      \"imAddresses\": [\n        null\n      ],\n      \"inferenceClassification\": {\n        \"overrides\": [\n          {\n            \"senderEmailAddress\": {}\n          }\n        ]\n      },\n      \"infoCatalogs\": [\n        null\n      ],\n      \"informationProtection\": {\n        \"bitlocker\": {\n          \"recoveryKeys\": [\n            {}\n          ]\n        },\n        \"dataLossPreventionPolicies\": [\n          {}\n        ],\n        \"policy\": {\n          \"labels\": [\n            {\n              \"parent\": {\n                \"parent\": {}\n              }\n            }\n          ]\n        },\n        \"sensitivityLabels\": [\n          {\n            \"assignedPolicies\": [\n              {}\n            ],\n            \"autoLabeling\": {\n              \"sensitiveTypeIds\": [\n                null\n              ]\n            },\n            \"labelActions\": [\n              {}\n            ],\n            \"sublabels\": [\n              {}\n            ]\n          }\n        ],\n        \"sensitivityPolicySettings\": {\n          \"applicableTo\": {}\n        },\n        \"threatAssessmentRequests\": [\n          {\n            \"createdBy\": {},\n            \"results\": [\n              {}\n            ]\n          }\n        ]\n      },\n      \"insights\": {\n        \"shared\": [\n          {\n            \"lastShared\": {\n              \"sharedBy\": {},\n              \"sharingReference\": {}\n            },\n            \"lastSharedMethod\": {},\n            \"resource\": {},\n            \"resourceReference\": {},\n            \"resourceVisualization\": {},\n            \"sharingHistory\": [\n              {}\n            ]\n          }\n        ],\n        \"trending\": [\n          {\n            \"resource\": {},\n            \"resourceReference\": {},\n            \"resourceVisualization\": {}\n          }\n        ],\n        \"used\": [\n          {\n            \"lastUsed\": {},\n            \"resource\": {},\n            \"resourceReference\": {},\n            \"resourceVisualization\": {}\n          }\n        ]\n      },\n      \"interests\": [\n        null\n      ],\n      \"joinedGroups\": [\n        {\n          \"@odata.type\": \"#microsoft.graph.group\",\n          \"acceptedSenders\": [\n            {}\n          ],\n          \"appRoleAssignments\": [\n            {}\n          ],\n          \"assignedLabels\": [\n            {}\n          ],\n          \"assignedLicenses\": [\n            {}\n          ],\n          \"calendar\": {},\n          \"calendarView\": [\n            {}\n          ],\n          \"conversations\": [\n            {\n              \"threads\": [\n                {\n                  \"ccRecipients\": [\n                    {}\n                  ],\n                  \"posts\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.post\",\n                      \"attachments\": [\n                        {}\n                      ],\n                      \"body\": {},\n                      \"extensions\": [\n                        {}\n                      ],\n                      \"from\": {},\n                      \"importance\": {},\n                      \"inReplyTo\": {},\n                      \"mentions\": [\n                        {\n                          \"createdBy\": {},\n                          \"mentioned\": {}\n                        }\n                      ],\n                      \"multiValueExtendedProperties\": [\n                        {}\n                      ],\n                      \"newParticipants\": [\n                        {}\n                      ],\n                      \"sender\": {},\n                      \"singleValueExtendedProperties\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"toRecipients\": [\n                    {}\n                  ],\n                  \"uniqueSenders\": [\n                    null\n                  ]\n                }\n              ],\n              \"uniqueSenders\": [\n                null\n              ]\n            }\n          ],\n          \"createdOnBehalfOf\": {},\n          \"drive\": {},\n          \"drives\": [\n            {}\n          ],\n          \"endpoints\": [\n            {}\n          ],\n          \"events\": [\n            {}\n          ],\n          \"extensions\": [\n            {}\n          ],\n          \"groupLifecyclePolicies\": [\n            {}\n          ],\n          \"groupTypes\": [\n            null\n          ],\n          \"infoCatalogs\": [\n            null\n          ],\n          \"licenseProcessingState\": {},\n          \"memberOf\": [\n            {}\n          ],\n          \"members\": [\n            {}\n          ],\n          \"membersWithLicenseErrors\": [\n            {}\n          ],\n          \"membershipRuleProcessingStatus\": {},\n          \"onPremisesProvisioningErrors\": [\n            {}\n          ],\n          \"onenote\": {\n            \"notebooks\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.notebook\",\n                \"createdBy\": {},\n                \"lastModifiedBy\": {},\n                \"links\": {\n                  \"oneNoteClientUrl\": {},\n                  \"oneNoteWebUrl\": {}\n                },\n                \"sectionGroups\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.sectionGroup\",\n                    \"parentNotebook\": {},\n                    \"parentSectionGroup\": {},\n                    \"sectionGroups\": [\n                      {}\n                    ],\n                    \"sections\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.onenoteSection\",\n                        \"links\": {\n                          \"oneNoteClientUrl\": {},\n                          \"oneNoteWebUrl\": {}\n                        },\n                        \"pages\": [\n                          {\n                            \"@odata.type\": \"#microsoft.graph.onenotePage\",\n                            \"links\": {\n                              \"oneNoteClientUrl\": {},\n                              \"oneNoteWebUrl\": {}\n                            },\n                            \"parentNotebook\": {},\n                            \"parentSection\": {},\n                            \"userTags\": [\n                              null\n                            ]\n                          }\n                        ],\n                        \"parentNotebook\": {},\n                        \"parentSectionGroup\": {}\n                      }\n                    ]\n                  }\n                ],\n                \"sections\": [\n                  {}\n                ]\n              }\n            ],\n            \"operations\": [\n              {\n                \"error\": {}\n              }\n            ],\n            \"pages\": [\n              {}\n            ],\n            \"resources\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.onenoteResource\"\n              }\n            ],\n            \"sectionGroups\": [\n              {}\n            ],\n            \"sections\": [\n              {}\n            ]\n          },\n          \"owners\": [\n            {}\n          ],\n          \"permissionGrants\": [\n            {}\n          ],\n          \"photo\": {},\n          \"photos\": [\n            {}\n          ],\n          \"planner\": {\n            \"plans\": [\n              {\n                \"buckets\": [\n                  {\n                    \"creationSource\": {},\n                    \"tasks\": [\n                      {\n                        \"appliedCategories\": {},\n                        \"assignedToTaskBoardFormat\": {\n                          \"orderHintsByAssignee\": {}\n                        },\n                        \"assignments\": {},\n                        \"bucketTaskBoardFormat\": {},\n                        \"completedBy\": {},\n                        \"createdBy\": {},\n                        \"creationSource\": {\n                          \"creationSourceKind\": {},\n                          \"teamsPublicationInfo\": {\n                            \"@odata.type\": \"#microsoft.graph.plannerTeamsPublicationInfo\"\n                          }\n                        },\n                        \"details\": {\n                          \"checklist\": {},\n                          \"notes\": {},\n                          \"references\": {}\n                        },\n                        \"previewType\": {},\n                        \"progressTaskBoardFormat\": {},\n                        \"recurrence\": {\n                          \"schedule\": {\n                            \"pattern\": {}\n                          }\n                        }\n                      }\n                    ]\n                  }\n                ],\n                \"container\": {},\n                \"contexts\": {},\n                \"createdBy\": {},\n                \"creationSource\": {\n                  \"creationSourceKind\": {}\n                },\n                \"details\": {\n                  \"categoryDescriptions\": {},\n                  \"contextDetails\": {},\n                  \"sharedWith\": {}\n                },\n                \"sharedWithContainers\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.plannerSharedWithContainer\"\n                  }\n                ],\n                \"tasks\": [\n                  {}\n                ]\n              }\n            ]\n          },\n          \"proxyAddresses\": [\n            null\n          ],\n          \"rejectedSenders\": [\n            {}\n          ],\n          \"resourceBehaviorOptions\": [\n            null\n          ],\n          \"resourceProvisioningOptions\": [\n            null\n          ],\n          \"settings\": [\n            {\n              \"values\": [\n                {}\n              ]\n            }\n          ],\n          \"sites\": [\n            {}\n          ],\n          \"team\": {\n            \"allChannels\": [\n              {\n                \"filesFolder\": {},\n                \"members\": [\n                  {}\n                ],\n                \"messages\": [\n                  {}\n                ],\n                \"moderationSettings\": {},\n                \"sharedWithTeams\": [\n                  {\n                    \"team\": {},\n                    \"allowedMembers\": [\n                      {}\n                    ]\n                  }\n                ],\n                \"summary\": {},\n                \"tabs\": [\n                  {}\n                ]\n              }\n            ],\n            \"channels\": [\n              {}\n            ],\n            \"discoverySettings\": {},\n            \"funSettings\": {},\n            \"group\": {},\n            \"guestSettings\": {},\n            \"incomingChannels\": [\n              {}\n            ],\n            \"installedApps\": [\n              {}\n            ],\n            \"memberSettings\": {},\n            \"members\": [\n              {}\n            ],\n            \"messagingSettings\": {},\n            \"operations\": [\n              {}\n            ],\n            \"owners\": [\n              {}\n            ],\n            \"permissionGrants\": [\n              {}\n            ],\n            \"photo\": {},\n            \"primaryChannel\": {},\n            \"schedule\": {\n              \"offerShiftRequests\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.offerShiftRequest\",\n                  \"createdBy\": {},\n                  \"lastModifiedBy\": {}\n                }\n              ],\n              \"openShiftChangeRequests\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.openShiftChangeRequest\"\n                }\n              ],\n              \"openShifts\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.openShift\",\n                  \"draftOpenShift\": {\n                    \"@odata.type\": \"#microsoft.graph.openShiftItem\",\n                    \"activities\": [\n                      {\n                        \"theme\": {}\n                      }\n                    ]\n                  },\n                  \"sharedOpenShift\": {}\n                }\n              ],\n              \"provisionStatus\": {},\n              \"schedulingGroups\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.schedulingGroup\",\n                  \"userIds\": [\n                    null\n                  ]\n                }\n              ],\n              \"shifts\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.shift\",\n                  \"draftShift\": {},\n                  \"sharedShift\": {}\n                }\n              ],\n              \"swapShiftsChangeRequests\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.swapShiftsChangeRequest\"\n                }\n              ],\n              \"timeCards\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.timeCard\",\n                  \"breaks\": [\n                    {\n                      \"end\": {\n                        \"notes\": {}\n                      },\n                      \"notes\": {},\n                      \"start\": {}\n                    }\n                  ],\n                  \"clockInEvent\": {},\n                  \"clockOutEvent\": {},\n                  \"notes\": {},\n                  \"originalEntry\": {\n                    \"breaks\": [\n                      {}\n                    ],\n                    \"clockInEvent\": {},\n                    \"clockOutEvent\": {}\n                  }\n                }\n              ],\n              \"timeClockSettings\": {\n                \"approvedLocation\": {}\n              },\n              \"timeOffReasons\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.timeOffReason\"\n                }\n              ],\n              \"timeOffRequests\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.timeOffRequest\"\n                }\n              ],\n              \"timesOff\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.timeOff\",\n                  \"draftTimeOff\": {},\n                  \"sharedTimeOff\": {}\n                }\n              ],\n              \"workforceIntegrationIds\": [\n                null\n              ]\n            },\n            \"summary\": {},\n            \"tags\": [\n              {\n                \"members\": [\n                  {}\n                ]\n              }\n            ],\n            \"template\": {},\n            \"templateDefinition\": {\n              \"categories\": [\n                null\n              ],\n              \"lastModifiedBy\": {},\n              \"teamDefinition\": {}\n            }\n          },\n          \"threads\": [\n            {}\n          ],\n          \"transitiveMemberOf\": [\n            {}\n          ],\n          \"transitiveMembers\": [\n            {}\n          ],\n          \"writebackConfiguration\": {}\n        }\n      ],\n      \"joinedTeams\": [\n        {}\n      ],\n      \"licenseAssignmentStates\": [\n        {\n          \"disabledPlans\": [\n            null\n          ]\n        }\n      ],\n      \"licenseDetails\": [\n        {}\n      ],\n      \"mailFolders\": [\n        {\n          \"childFolders\": [\n            {}\n          ],\n          \"messageRules\": [\n            {\n              \"actions\": {\n                \"assignCategories\": [\n                  null\n                ],\n                \"forwardAsAttachmentTo\": [\n                  {}\n                ],\n                \"forwardTo\": [\n                  {}\n                ],\n                \"markImportance\": {},\n                \"redirectTo\": [\n                  {}\n                ]\n              },\n              \"conditions\": {\n                \"bodyContains\": [\n                  null\n                ],\n                \"bodyOrSubjectContains\": [\n                  null\n                ],\n                \"categories\": [\n                  null\n                ],\n                \"fromAddresses\": [\n                  {}\n                ],\n                \"headerContains\": [\n                  null\n                ],\n                \"importance\": {},\n                \"recipientContains\": [\n                  null\n                ],\n                \"senderContains\": [\n                  null\n                ],\n                \"sensitivity\": {},\n                \"sentToAddresses\": [\n                  {}\n                ],\n                \"subjectContains\": [\n                  null\n                ],\n                \"withinSizeRange\": {}\n              },\n              \"exceptions\": {}\n            }\n          ],\n          \"messages\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.message\",\n              \"attachments\": [\n                {}\n              ],\n              \"bccRecipients\": [\n                {}\n              ],\n              \"body\": {},\n              \"ccRecipients\": [\n                {}\n              ],\n              \"extensions\": [\n                {}\n              ],\n              \"flag\": {},\n              \"from\": {},\n              \"importance\": {},\n              \"inferenceClassification\": {},\n              \"internetMessageHeaders\": [\n                {}\n              ],\n              \"mentions\": [\n                {}\n              ],\n              \"mentionsPreview\": {},\n              \"multiValueExtendedProperties\": [\n                {}\n              ],\n              \"replyTo\": [\n                {}\n              ],\n              \"sender\": {},\n              \"singleValueExtendedProperties\": [\n                {}\n              ],\n              \"toRecipients\": [\n                {}\n              ],\n              \"uniqueBody\": {},\n              \"unsubscribeData\": [\n                null\n              ]\n            }\n          ],\n          \"multiValueExtendedProperties\": [\n            {}\n          ],\n          \"singleValueExtendedProperties\": [\n            {}\n          ],\n          \"userConfigurations\": [\n            {}\n          ]\n        }\n      ],\n      \"mailboxSettings\": {\n        \"automaticRepliesSetting\": {\n          \"scheduledEndDateTime\": {},\n          \"scheduledStartDateTime\": {}\n        },\n        \"language\": {},\n        \"workingHours\": {\n          \"daysOfWeek\": [\n            {}\n          ],\n          \"timeZone\": {}\n        }\n      },\n      \"managedAppRegistrations\": [\n        {\n          \"appIdentifier\": {},\n          \"appliedPolicies\": [\n            {\n              \"roleScopeTagIds\": [\n                null\n              ]\n            }\n          ],\n          \"flaggedReasons\": [\n            null\n          ],\n          \"intendedPolicies\": [\n            {}\n          ],\n          \"operations\": [\n            {}\n          ]\n        }\n      ],\n      \"managedDevices\": [\n        {\n          \"assignmentFilterEvaluationStatusDetails\": [\n            {}\n          ],\n          \"chromeOSDeviceInfo\": [\n            {}\n          ],\n          \"cloudPcRemoteActionResults\": [\n            {}\n          ],\n          \"configurationManagerClientEnabledFeatures\": {},\n          \"configurationManagerClientHealthState\": {},\n          \"configurationManagerClientInformation\": {},\n          \"detectedApps\": [\n            {\n              \"managedDevices\": [\n                {}\n              ]\n            }\n          ],\n          \"deviceActionResults\": [\n            {\n              \"actionState\": {}\n            }\n          ],\n          \"deviceCategory\": {\n            \"roleScopeTagIds\": [\n              null\n            ]\n          },\n          \"deviceCompliancePolicyStates\": [\n            {\n              \"settingStates\": [\n                {\n                  \"sources\": [\n                    {}\n                  ]\n                }\n              ],\n              \"state\": {}\n            }\n          ],\n          \"deviceConfigurationStates\": [\n            {\n              \"platformType\": {},\n              \"settingStates\": [\n                {\n                  \"sources\": [\n                    {}\n                  ],\n                  \"state\": {}\n                }\n              ],\n              \"state\": {}\n            }\n          ],\n          \"deviceHealthAttestationState\": {},\n          \"deviceHealthScriptStates\": [\n            {\n              \"assignmentFilterIds\": [\n                null\n              ]\n            }\n          ],\n          \"hardwareInformation\": {\n            \"sharedDeviceCachedUsers\": [\n              {}\n            ],\n            \"wiredIPv4Addresses\": [\n              null\n            ]\n          },\n          \"logCollectionRequests\": [\n            {}\n          ],\n          \"managedDeviceMobileAppConfigurationStates\": [\n            {\n              \"platformType\": {},\n              \"settingStates\": [\n                {\n                  \"sources\": [\n                    {}\n                  ],\n                  \"state\": {}\n                }\n              ],\n              \"state\": {}\n            }\n          ],\n          \"roleScopeTagIds\": [\n            null\n          ],\n          \"securityBaselineStates\": [\n            {\n              \"settingStates\": [\n                {\n                  \"contributingPolicies\": [\n                    {}\n                  ],\n                  \"sourcePolicies\": [\n                    {}\n                  ]\n                }\n              ],\n              \"state\": {}\n            }\n          ],\n          \"users\": [\n            {}\n          ],\n          \"usersLoggedOn\": [\n            {}\n          ],\n          \"windowsProtectionState\": {\n            \"detectedMalwareState\": [\n              {}\n            ]\n          }\n        }\n      ],\n      \"manager\": {},\n      \"memberOf\": [\n        {}\n      ],\n      \"messages\": [\n        {}\n      ],\n      \"mobileAppIntentAndStates\": [\n        {\n          \"mobileAppList\": [\n            {\n              \"supportedDeviceTypes\": [\n                {\n                  \"type\": {}\n                }\n              ]\n            }\n          ]\n        }\n      ],\n      \"mobileAppTroubleshootingEvents\": [\n        {\n          \"appLogCollectionRequests\": [\n            {\n              \"customLogFolders\": [\n                null\n              ]\n            }\n          ],\n          \"history\": [\n            {\n              \"troubleshootingErrorDetails\": {}\n            }\n          ]\n        }\n      ],\n      \"notifications\": [\n        {\n          \"payload\": {\n            \"visualContent\": {}\n          },\n          \"targetPolicy\": {\n            \"platformTypes\": [\n              null\n            ]\n          }\n        }\n      ],\n      \"oauth2PermissionGrants\": [\n        {}\n      ],\n      \"onPremisesExtensionAttributes\": {},\n      \"onPremisesProvisioningErrors\": [\n        {}\n      ],\n      \"onenote\": {},\n      \"onlineMeetings\": [\n        {\n          \"anonymizeIdentityForRoles\": [\n            null\n          ],\n          \"attendanceReports\": [\n            {\n              \"attendanceRecords\": [\n                {\n                  \"attendanceIntervals\": [\n                    {}\n                  ],\n                  \"identity\": {}\n                }\n              ]\n            }\n          ],\n          \"audioConferencing\": {\n            \"tollFreeNumbers\": [\n              null\n            ],\n            \"tollNumbers\": [\n              null\n            ]\n          },\n          \"broadcastSettings\": {\n            \"captions\": {\n              \"translationLanguages\": [\n                null\n              ]\n            }\n          },\n          \"capabilities\": [\n            null\n          ],\n          \"chatInfo\": {},\n          \"joinInformation\": {},\n          \"joinMeetingIdSettings\": {},\n          \"lobbyBypassSettings\": {},\n          \"meetingAttendanceReport\": {},\n          \"participants\": {\n            \"attendees\": [\n              {\n                \"identity\": {},\n                \"role\": {}\n              }\n            ],\n            \"contributors\": [\n              {}\n            ],\n            \"organizer\": {},\n            \"producers\": [\n              {}\n            ]\n          },\n          \"registration\": {\n            \"@odata.type\": \"#microsoft.graph.meetingRegistration\",\n            \"registrants\": [\n              {}\n            ],\n            \"customQuestions\": [\n              {\n                \"answerOptions\": [\n                  null\n                ]\n              }\n            ],\n            \"speakers\": [\n              {}\n            ]\n          },\n          \"transcripts\": [\n            {}\n          ],\n          \"virtualAppointment\": {\n            \"appointmentClients\": [\n              {}\n            ],\n            \"settings\": {}\n          },\n          \"watermarkProtection\": {}\n        }\n      ],\n      \"otherMails\": [\n        null\n      ],\n      \"outlook\": {\n        \"masterCategories\": [\n          {}\n        ],\n        \"taskFolders\": [\n          {\n            \"multiValueExtendedProperties\": [\n              {}\n            ],\n            \"singleValueExtendedProperties\": [\n              {}\n            ],\n            \"tasks\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.outlookTask\",\n                \"attachments\": [\n                  {}\n                ],\n                \"body\": {},\n                \"completedDateTime\": {},\n                \"dueDateTime\": {},\n                \"importance\": {},\n                \"multiValueExtendedProperties\": [\n                  {}\n                ],\n                \"recurrence\": {},\n                \"reminderDateTime\": {},\n                \"sensitivity\": {},\n                \"singleValueExtendedProperties\": [\n                  {}\n                ],\n                \"startDateTime\": {}\n              }\n            ]\n          }\n        ],\n        \"taskGroups\": [\n          {\n            \"taskFolders\": [\n              {}\n            ]\n          }\n        ],\n        \"tasks\": [\n          {}\n        ]\n      },\n      \"ownedDevices\": [\n        {}\n      ],\n      \"ownedObjects\": [\n        {}\n      ],\n      \"passwordProfile\": {},\n      \"pastProjects\": [\n        null\n      ],\n      \"pendingAccessReviewInstances\": [\n        {\n          \"contactedReviewers\": [\n            {}\n          ],\n          \"decisions\": [\n            {\n              \"appliedBy\": {\n                \"@odata.type\": \"#microsoft.graph.userIdentity\"\n              },\n              \"insights\": [\n                {}\n              ],\n              \"instance\": {},\n              \"principal\": {},\n              \"principalResourceMembership\": {},\n              \"resource\": {},\n              \"reviewedBy\": {},\n              \"target\": {}\n            }\n          ],\n          \"definition\": {\n            \"additionalNotificationRecipients\": [\n              {\n                \"notificationRecipientScope\": {}\n              }\n            ],\n            \"backupReviewers\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.accessReviewReviewerScope\"\n              }\n            ],\n            \"createdBy\": {},\n            \"fallbackReviewers\": [\n              {}\n            ],\n            \"instanceEnumerationScope\": {},\n            \"instances\": [\n              {}\n            ],\n            \"reviewers\": [\n              {}\n            ],\n            \"scope\": {},\n            \"settings\": {\n              \"applyActions\": [\n                {}\n              ],\n              \"recommendationInsightSettings\": [\n                {}\n              ],\n              \"recurrence\": {}\n            },\n            \"stageSettings\": [\n              {\n                \"decisionsThatWillMoveToNextStage\": [\n                  null\n                ],\n                \"dependsOn\": [\n                  null\n                ],\n                \"fallbackReviewers\": [\n                  {}\n                ],\n                \"recommendationInsightSettings\": [\n                  {}\n                ],\n                \"reviewers\": [\n                  {}\n                ]\n              }\n            ]\n          },\n          \"errors\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.accessReviewError\"\n            }\n          ],\n          \"fallbackReviewers\": [\n            {}\n          ],\n          \"reviewers\": [\n            {}\n          ],\n          \"scope\": {},\n          \"stages\": [\n            {\n              \"decisions\": [\n                {}\n              ],\n              \"fallbackReviewers\": [\n                {}\n              ],\n              \"reviewers\": [\n                {}\n              ]\n            }\n          ]\n        }\n      ],\n      \"people\": [\n        {\n          \"emailAddresses\": [\n            {}\n          ],\n          \"phones\": [\n            {}\n          ],\n          \"postalAddresses\": [\n            {}\n          ],\n          \"sources\": [\n            {}\n          ],\n          \"websites\": [\n            {}\n          ]\n        }\n      ],\n      \"photo\": {},\n      \"photos\": [\n        {}\n      ],\n      \"planner\": {\n        \"all\": [\n          {}\n        ],\n        \"favoritePlanReferences\": {},\n        \"favoritePlans\": [\n          {}\n        ],\n        \"plans\": [\n          {}\n        ],\n        \"recentPlanReferences\": {},\n        \"recentPlans\": [\n          {}\n        ],\n        \"rosterPlans\": [\n          {}\n        ],\n        \"tasks\": [\n          {}\n        ]\n      },\n      \"presence\": {\n        \"outOfOfficeSettings\": {},\n        \"statusMessage\": {\n          \"expiryDateTime\": {},\n          \"message\": {}\n        }\n      },\n      \"print\": {\n        \"recentPrinterShares\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.printerShare\",\n            \"capabilities\": {\n              \"bottomMargins\": [\n                null\n              ],\n              \"colorModes\": [\n                null\n              ],\n              \"contentTypes\": [\n                null\n              ],\n              \"copiesPerJob\": {},\n              \"dpis\": [\n                null\n              ],\n              \"duplexModes\": [\n                null\n              ],\n              \"feedDirections\": [\n                null\n              ],\n              \"feedOrientations\": [\n                null\n              ],\n              \"finishings\": [\n                null\n              ],\n              \"inputBins\": [\n                null\n              ],\n              \"leftMargins\": [\n                null\n              ],\n              \"mediaColors\": [\n                null\n              ],\n              \"mediaSizes\": [\n                null\n              ],\n              \"mediaTypes\": [\n                null\n              ],\n              \"multipageLayouts\": [\n                null\n              ],\n              \"orientations\": [\n                null\n              ],\n              \"outputBins\": [\n                null\n              ],\n              \"pagesPerSheet\": [\n                null\n              ],\n              \"qualities\": [\n                null\n              ],\n              \"rightMargins\": [\n                null\n              ],\n              \"scalings\": [\n                null\n              ],\n              \"supportedColorConfigurations\": [\n                null\n              ],\n              \"supportedCopiesPerJob\": {},\n              \"supportedDocumentMimeTypes\": [\n                null\n              ],\n              \"supportedDuplexConfigurations\": [\n                null\n              ],\n              \"supportedFinishings\": [\n                {}\n              ],\n              \"supportedMediaColors\": [\n                null\n              ],\n              \"supportedMediaSizes\": [\n                null\n              ],\n              \"supportedMediaTypes\": [\n                null\n              ],\n              \"supportedOrientations\": [\n                {}\n              ],\n              \"supportedOutputBins\": [\n                null\n              ],\n              \"supportedPagesPerSheet\": {},\n              \"supportedPresentationDirections\": [\n                null\n              ],\n              \"supportedPrintQualities\": [\n                {}\n              ],\n              \"topMargins\": [\n                null\n              ]\n            },\n            \"defaults\": {\n              \"colorMode\": {},\n              \"duplexConfiguration\": {},\n              \"duplexMode\": {},\n              \"finishings\": [\n                {}\n              ],\n              \"multipageLayout\": {},\n              \"orientation\": {},\n              \"presentationDirection\": {},\n              \"printColorConfiguration\": {},\n              \"printQuality\": {},\n              \"quality\": {},\n              \"scaling\": {}\n            },\n            \"jobs\": [\n              {\n                \"configuration\": {\n                  \"colorMode\": {},\n                  \"duplexMode\": {},\n                  \"feedOrientation\": {},\n                  \"finishings\": [\n                    {}\n                  ],\n                  \"margin\": {},\n                  \"multipageLayout\": {},\n                  \"orientation\": {},\n                  \"pageRanges\": [\n                    {}\n                  ],\n                  \"quality\": {},\n                  \"scaling\": {}\n                },\n                \"createdBy\": {},\n                \"documents\": [\n                  {\n                    \"configuration\": {\n                      \"colorMode\": {},\n                      \"duplexMode\": {},\n                      \"feedDirection\": {},\n                      \"feedOrientation\": {},\n                      \"finishings\": [\n                        {}\n                      ],\n                      \"margin\": {},\n                      \"multipageLayout\": {},\n                      \"orientation\": {},\n                      \"pageRanges\": [\n                        {}\n                      ],\n                      \"quality\": {},\n                      \"scaling\": {}\n                    }\n                  }\n                ],\n                \"status\": {\n                  \"details\": [\n                    null\n                  ],\n                  \"state\": {}\n                },\n                \"tasks\": [\n                  {\n                    \"definition\": {\n                      \"createdBy\": {},\n                      \"tasks\": [\n                        {}\n                      ]\n                    },\n                    \"status\": {},\n                    \"trigger\": {\n                      \"definition\": {}\n                    }\n                  }\n                ]\n              }\n            ],\n            \"location\": {\n              \"organization\": [\n                null\n              ],\n              \"subdivision\": [\n                null\n              ],\n              \"subunit\": [\n                null\n              ]\n            },\n            \"status\": {\n              \"details\": [\n                null\n              ],\n              \"processingStateReasons\": [\n                null\n              ],\n              \"state\": {}\n            },\n            \"allowedGroups\": [\n              {}\n            ],\n            \"allowedUsers\": [\n              {}\n            ],\n            \"printer\": {\n              \"@odata.type\": \"#microsoft.graph.printer\",\n              \"connectors\": [\n                {\n                  \"deviceHealth\": {},\n                  \"location\": {}\n                }\n              ],\n              \"share\": {},\n              \"shares\": [\n                {}\n              ],\n              \"taskTriggers\": [\n                {}\n              ]\n            },\n            \"viewPoint\": {}\n          }\n        ]\n      },\n      \"profile\": {\n        \"account\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.userAccountInformation\",\n            \"createdBy\": {},\n            \"inference\": {},\n            \"lastModifiedBy\": {},\n            \"source\": {\n              \"type\": [\n                null\n              ]\n            },\n            \"preferredLanguageTag\": {}\n          }\n        ],\n        \"addresses\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.itemAddress\",\n            \"detail\": {},\n            \"geoCoordinates\": {}\n          }\n        ],\n        \"anniversaries\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personAnnualEvent\"\n          }\n        ],\n        \"awards\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personAward\"\n          }\n        ],\n        \"certifications\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personCertification\"\n          }\n        ],\n        \"educationalActivities\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.educationalActivity\",\n            \"institution\": {\n              \"location\": {}\n            },\n            \"program\": {\n              \"activities\": [\n                null\n              ],\n              \"awards\": [\n                null\n              ],\n              \"fieldsOfStudy\": [\n                null\n              ]\n            }\n          }\n        ],\n        \"emails\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.itemEmail\",\n            \"type\": {}\n          }\n        ],\n        \"interests\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personInterest\",\n            \"categories\": [\n              null\n            ],\n            \"collaborationTags\": [\n              null\n            ]\n          }\n        ],\n        \"languages\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.languageProficiency\",\n            \"reading\": {},\n            \"spoken\": {},\n            \"written\": {}\n          }\n        ],\n        \"names\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personName\",\n            \"pronunciation\": {}\n          }\n        ],\n        \"notes\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personAnnotation\",\n            \"detail\": {}\n          }\n        ],\n        \"patents\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.itemPatent\"\n          }\n        ],\n        \"phones\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.itemPhone\",\n            \"type\": {}\n          }\n        ],\n        \"positions\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.workPosition\",\n            \"categories\": [\n              null\n            ],\n            \"colleagues\": [\n              {}\n            ],\n            \"detail\": {\n              \"company\": {\n                \"address\": {}\n              }\n            },\n            \"manager\": {}\n          }\n        ],\n        \"projects\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.projectParticipation\",\n            \"categories\": [\n              null\n            ],\n            \"client\": {},\n            \"collaborationTags\": [\n              null\n            ],\n            \"colleagues\": [\n              {}\n            ],\n            \"detail\": {},\n            \"sponsors\": [\n              {}\n            ]\n          }\n        ],\n        \"publications\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.itemPublication\"\n          }\n        ],\n        \"skills\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.skillProficiency\",\n            \"categories\": [\n              null\n            ],\n            \"collaborationTags\": [\n              null\n            ]\n          }\n        ],\n        \"webAccounts\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.webAccount\",\n            \"service\": {}\n          }\n        ],\n        \"websites\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personWebsite\",\n            \"categories\": [\n              null\n            ]\n          }\n        ]\n      },\n      \"provisionedPlans\": [\n        {}\n      ],\n      \"proxyAddresses\": [\n        null\n      ],\n      \"registeredDevices\": [\n        {}\n      ],\n      \"responsibilities\": [\n        null\n      ],\n      \"schools\": [\n        null\n      ],\n      \"scopedRoleMemberOf\": [\n        {\n          \"roleMemberInfo\": {}\n        }\n      ],\n      \"security\": {\n        \"informationProtection\": {\n          \"labelPolicySettings\": {},\n          \"sensitivityLabels\": [\n            {\n              \"contentFormats\": [\n                null\n              ],\n              \"parent\": {}\n            }\n          ]\n        }\n      },\n      \"settings\": {\n        \"contactMergeSuggestions\": {},\n        \"itemInsights\": {},\n        \"regionalAndLanguageSettings\": {\n          \"authoringLanguages\": [\n            {}\n          ],\n          \"defaultDisplayLanguage\": {},\n          \"defaultRegionalFormat\": {},\n          \"defaultSpeechInputLanguage\": {},\n          \"defaultTranslationLanguage\": {},\n          \"regionalFormatOverrides\": {},\n          \"translationPreferences\": {\n            \"languageOverrides\": [\n              {}\n            ],\n            \"translationBehavior\": {},\n            \"untranslatedLanguages\": [\n              null\n            ]\n          }\n        },\n        \"shiftPreferences\": {\n          \"@odata.type\": \"#microsoft.graph.shiftPreferences\",\n          \"availability\": [\n            {\n              \"recurrence\": {},\n              \"timeSlots\": [\n                {}\n              ]\n            }\n          ]\n        }\n      },\n      \"signInActivity\": {},\n      \"skills\": [\n        null\n      ],\n      \"teamwork\": {\n        \"associatedTeams\": [\n          {}\n        ],\n        \"installedApps\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.userScopeTeamsAppInstallation\",\n            \"chat\": {}\n          }\n        ]\n      },\n      \"todo\": {\n        \"lists\": [\n          {\n            \"extensions\": [\n              {}\n            ],\n            \"tasks\": [\n              {\n                \"attachmentSessions\": [\n                  {\n                    \"nextExpectedRanges\": [\n                      null\n                    ]\n                  }\n                ],\n                \"attachments\": [\n                  {}\n                ],\n                \"body\": {},\n                \"categories\": [\n                  null\n                ],\n                \"checklistItems\": [\n                  {}\n                ],\n                \"completedDateTime\": {},\n                \"dueDateTime\": {},\n                \"extensions\": [\n                  {}\n                ],\n                \"importance\": {},\n                \"linkedResources\": [\n                  {}\n                ],\n                \"recurrence\": {},\n                \"reminderDateTime\": {},\n                \"startDateTime\": {},\n                \"status\": {}\n              }\n            ]\n          }\n        ]\n      },\n      \"transitiveMemberOf\": [\n        {}\n      ],\n      \"transitiveReports\": [\n        {}\n      ],\n      \"usageRights\": [\n        {}\n      ],\n      \"windowsInformationProtectionDeviceRegistrations\": [\n        {}\n      ]\n    },\n    \"lastModifiedBy\": {},\n    \"lastModifiedByUser\": {},\n    \"parentReference\": {},\n    \"analytics\": {},\n    \"columns\": [\n      {}\n    ],\n    \"contentTypes\": [\n      {}\n    ],\n    \"deleted\": {},\n    \"drive\": {},\n    \"drives\": [\n      {}\n    ],\n    \"externalColumns\": [\n      {}\n    ],\n    \"informationProtection\": {},\n    \"items\": [\n      {}\n    ],\n    \"lists\": [\n      {}\n    ],\n    \"onenote\": {},\n    \"operations\": [\n      {}\n    ],\n    \"pages\": [\n      {\n        \"@odata.type\": \"#microsoft.graph.sitePage\",\n        \"canvasLayout\": {\n          \"horizontalSections\": [\n            {\n              \"columns\": [\n                {\n                  \"webparts\": [\n                    {}\n                  ]\n                }\n              ]\n            }\n          ],\n          \"verticalSection\": {\n            \"emphasis\": {},\n            \"webparts\": [\n              {}\n            ]\n          }\n        },\n        \"contentType\": {},\n        \"publishingState\": {},\n        \"reactions\": {},\n        \"titleArea\": {\n          \"serverProcessedContent\": {\n            \"componentDependencies\": [\n              {}\n            ],\n            \"customMetadata\": [\n              {\n                \"value\": {}\n              }\n            ],\n            \"htmlStrings\": [\n              {}\n            ],\n            \"imageSources\": [\n              {}\n            ],\n            \"links\": [\n              {}\n            ],\n            \"searchablePlainTexts\": [\n              {}\n            ]\n          }\n        },\n        \"webParts\": [\n          {}\n        ]\n      }\n    ],\n    \"permissions\": [\n      {}\n    ],\n    \"root\": {},\n    \"settings\": {},\n    \"sharepointIds\": {},\n    \"siteCollection\": {\n      \"root\": {}\n    },\n    \"sites\": [\n      {}\n    ],\n    \"termStore\": {\n      \"groups\": [\n        {}\n      ],\n      \"languageTags\": [\n        null\n      ],\n      \"sets\": [\n        {}\n      ]\n    }\n  }\n]",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Add"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/microsoft.graph.remove",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Remove"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "[\n  {\n    \"@odata.type\": \"#microsoft.graph.site\",\n    \"createdBy\": {\n      \"application\": {},\n      \"device\": {},\n      \"user\": {}\n    },\n    \"createdByUser\": {\n      \"@odata.type\": \"#microsoft.graph.user\",\n      \"activities\": [\n        {\n          \"contentInfo\": {},\n          \"historyItems\": [\n            {\n              \"activity\": {}\n            }\n          ],\n          \"status\": {},\n          \"visualElements\": {\n            \"attribution\": {},\n            \"content\": {}\n          }\n        }\n      ],\n      \"agreementAcceptances\": [\n        {}\n      ],\n      \"analytics\": {\n        \"activityStatistics\": [\n          {}\n        ],\n        \"settings\": {}\n      },\n      \"appConsentRequestsForApproval\": [\n        {\n          \"pendingScopes\": [\n            {}\n          ],\n          \"userConsentRequests\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.userConsentRequest\",\n              \"createdBy\": {},\n              \"approval\": {\n                \"steps\": [\n                  {\n                    \"reviewedBy\": {}\n                  }\n                ]\n              }\n            }\n          ]\n        }\n      ],\n      \"appRoleAssignedResources\": [\n        {\n          \"@odata.type\": \"#microsoft.graph.servicePrincipal\",\n          \"addIns\": [\n            {\n              \"properties\": [\n                {}\n              ]\n            }\n          ],\n          \"alternativeNames\": [\n            null\n          ],\n          \"appManagementPolicies\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.appManagementPolicy\",\n              \"appliesTo\": [\n                {}\n              ],\n              \"restrictions\": {\n                \"keyCredentials\": [\n                  {}\n                ],\n                \"passwordCredentials\": [\n                  {}\n                ]\n              }\n            }\n          ],\n          \"appRoleAssignedTo\": [\n            {}\n          ],\n          \"appRoleAssignments\": [\n            {}\n          ],\n          \"appRoles\": [\n            {\n              \"allowedMemberTypes\": [\n                null\n              ]\n            }\n          ],\n          \"claimsMappingPolicies\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.claimsMappingPolicy\",\n              \"appliesTo\": [\n                {}\n              ],\n              \"definition\": [\n                null\n              ]\n            }\n          ],\n          \"createdObjects\": [\n            {}\n          ],\n          \"customSecurityAttributes\": {},\n          \"delegatedPermissionClassifications\": [\n            {}\n          ],\n          \"endpoints\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.endpoint\"\n            }\n          ],\n          \"federatedIdentityCredentials\": [\n            {\n              \"audiences\": [\n                null\n              ]\n            }\n          ],\n          \"homeRealmDiscoveryPolicies\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.homeRealmDiscoveryPolicy\"\n            }\n          ],\n          \"info\": {},\n          \"keyCredentials\": [\n            {}\n          ],\n          \"licenseDetails\": [\n            {\n              \"servicePlans\": [\n                {}\n              ]\n            }\n          ],\n          \"memberOf\": [\n            {}\n          ],\n          \"notificationEmailAddresses\": [\n            null\n          ],\n          \"oauth2PermissionGrants\": [\n            {}\n          ],\n          \"ownedObjects\": [\n            {}\n          ],\n          \"owners\": [\n            {}\n          ],\n          \"passwordCredentials\": [\n            {}\n          ],\n          \"passwordSingleSignOnSettings\": {\n            \"fields\": [\n              {}\n            ]\n          },\n          \"publishedPermissionScopes\": [\n            {}\n          ],\n          \"replyUrls\": [\n            null\n          ],\n          \"samlSingleSignOnSettings\": {},\n          \"servicePrincipalNames\": [\n            null\n          ],\n          \"synchronization\": {\n            \"jobs\": [\n              {\n                \"schedule\": {},\n                \"schema\": {\n                  \"directories\": [\n                    {\n                      \"objects\": [\n                        {\n                          \"attributes\": [\n                            {\n                              \"apiExpressions\": [\n                                {}\n                              ],\n                              \"metadata\": [\n                                {}\n                              ],\n                              \"referencedObjects\": [\n                                {}\n                              ]\n                            }\n                          ],\n                          \"metadata\": [\n                            {}\n                          ],\n                          \"supportedApis\": [\n                            null\n                          ]\n                        }\n                      ]\n                    }\n                  ],\n                  \"synchronizationRules\": [\n                    {\n                      \"metadata\": [\n                        {}\n                      ],\n                      \"objectMappings\": [\n                        {\n                          \"attributeMappings\": [\n                            {\n                              \"source\": {\n                                \"parameters\": [\n                                  {\n                                    \"value\": {}\n                                  }\n                                ]\n                              }\n                            }\n                          ],\n                          \"metadata\": [\n                            {}\n                          ],\n                          \"scope\": {\n                            \"categoryFilterGroups\": [\n                              {\n                                \"clauses\": [\n                                  {\n                                    \"targetOperand\": {\n                                      \"values\": [\n                                        null\n                                      ]\n                                    }\n                                  }\n                                ]\n                              }\n                            ],\n                            \"groups\": [\n                              {}\n                            ],\n                            \"inputFilterGroups\": [\n                              {}\n                            ]\n                          }\n                        }\n                      ]\n                    }\n                  ]\n                },\n                \"status\": {\n                  \"lastExecution\": {\n                    \"error\": {}\n                  },\n                  \"lastSuccessfulExecution\": {},\n                  \"lastSuccessfulExecutionWithExports\": {},\n                  \"progress\": [\n                    {}\n                  ],\n                  \"quarantine\": {\n                    \"error\": {}\n                  },\n                  \"synchronizedEntryCountByType\": [\n                    {}\n                  ]\n                },\n                \"synchronizationJobSettings\": [\n                  {}\n                ]\n              }\n            ],\n            \"secrets\": [\n              {}\n            ],\n            \"templates\": [\n              {\n                \"metadata\": [\n                  {}\n                ],\n                \"schema\": {}\n              }\n            ]\n          },\n          \"tags\": [\n            null\n          ],\n          \"tokenIssuancePolicies\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.tokenIssuancePolicy\"\n            }\n          ],\n          \"tokenLifetimePolicies\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.tokenLifetimePolicy\"\n            }\n          ],\n          \"transitiveMemberOf\": [\n            {}\n          ],\n          \"verifiedPublisher\": {}\n        }\n      ],\n      \"appRoleAssignments\": [\n        {}\n      ],\n      \"approvals\": [\n        {}\n      ],\n      \"assignedLicenses\": [\n        {\n          \"disabledPlans\": [\n            null\n          ]\n        }\n      ],\n      \"assignedPlans\": [\n        {}\n      ],\n      \"authentication\": {\n        \"emailMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.emailAuthenticationMethod\"\n          }\n        ],\n        \"fido2Methods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.fido2AuthenticationMethod\",\n            \"attestationCertificates\": [\n              null\n            ]\n          }\n        ],\n        \"methods\": [\n          {}\n        ],\n        \"microsoftAuthenticatorMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.microsoftAuthenticatorAuthenticationMethod\",\n            \"device\": {\n              \"@odata.type\": \"#microsoft.graph.device\",\n              \"alternativeSecurityIds\": [\n                {}\n              ],\n              \"commands\": [\n                {\n                  \"payload\": {},\n                  \"responsepayload\": {}\n                }\n              ],\n              \"extensionAttributes\": {},\n              \"extensions\": [\n                {}\n              ],\n              \"hostnames\": [\n                null\n              ],\n              \"memberOf\": [\n                {}\n              ],\n              \"physicalIds\": [\n                null\n              ],\n              \"registeredOwners\": [\n                {}\n              ],\n              \"registeredUsers\": [\n                {}\n              ],\n              \"systemLabels\": [\n                null\n              ],\n              \"transitiveMemberOf\": [\n                {}\n              ],\n              \"usageRights\": [\n                {}\n              ]\n            }\n          }\n        ],\n        \"operations\": [\n          {}\n        ],\n        \"passwordMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.passwordAuthenticationMethod\"\n          }\n        ],\n        \"passwordlessMicrosoftAuthenticatorMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.passwordlessMicrosoftAuthenticatorAuthenticationMethod\",\n            \"device\": {}\n          }\n        ],\n        \"phoneMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.phoneAuthenticationMethod\"\n          }\n        ],\n        \"softwareOathMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.softwareOathAuthenticationMethod\"\n          }\n        ],\n        \"temporaryAccessPassMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.temporaryAccessPassAuthenticationMethod\"\n          }\n        ],\n        \"windowsHelloForBusinessMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.windowsHelloForBusinessAuthenticationMethod\",\n            \"device\": {}\n          }\n        ]\n      },\n      \"authorizationInfo\": {\n        \"certificateUserIds\": [\n          null\n        ]\n      },\n      \"businessPhones\": [\n        null\n      ],\n      \"calendar\": {\n        \"allowedOnlineMeetingProviders\": [\n          null\n        ],\n        \"calendarPermissions\": [\n          {\n            \"allowedRoles\": [\n              null\n            ],\n            \"emailAddress\": {},\n            \"role\": {}\n          }\n        ],\n        \"calendarView\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.event\",\n            \"categories\": [\n              null\n            ],\n            \"attachments\": [\n              {}\n            ],\n            \"attendees\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.attendee\",\n                \"emailAddress\": {},\n                \"proposedNewTime\": {\n                  \"end\": {},\n                  \"start\": {}\n                },\n                \"status\": {}\n              }\n            ],\n            \"body\": {},\n            \"calendar\": {},\n            \"cancelledOccurrences\": [\n              null\n            ],\n            \"end\": {},\n            \"exceptionOccurrences\": [\n              {}\n            ],\n            \"extensions\": [\n              {}\n            ],\n            \"instances\": [\n              {}\n            ],\n            \"location\": {\n              \"address\": {},\n              \"coordinates\": {}\n            },\n            \"locations\": [\n              {}\n            ],\n            \"multiValueExtendedProperties\": [\n              {\n                \"value\": [\n                  null\n                ]\n              }\n            ],\n            \"onlineMeeting\": {\n              \"phones\": [\n                {}\n              ],\n              \"tollFreeNumbers\": [\n                null\n              ]\n            },\n            \"onlineMeetingProvider\": {},\n            \"organizer\": {},\n            \"recurrence\": {\n              \"pattern\": {\n                \"daysOfWeek\": [\n                  null\n                ],\n                \"firstDayOfWeek\": {}\n              },\n              \"range\": {}\n            },\n            \"responseStatus\": {},\n            \"singleValueExtendedProperties\": [\n              {}\n            ],\n            \"start\": {}\n          }\n        ],\n        \"defaultOnlineMeetingProvider\": {},\n        \"events\": [\n          {}\n        ],\n        \"multiValueExtendedProperties\": [\n          {}\n        ],\n        \"owner\": {},\n        \"singleValueExtendedProperties\": [\n          {}\n        ]\n      },\n      \"calendarGroups\": [\n        {\n          \"calendars\": [\n            {}\n          ]\n        }\n      ],\n      \"calendarView\": [\n        {}\n      ],\n      \"calendars\": [\n        {}\n      ],\n      \"chats\": [\n        {\n          \"installedApps\": [\n            {\n              \"teamsApp\": {\n                \"appDefinitions\": [\n                  {\n                    \"bot\": {},\n                    \"colorIcon\": {\n                      \"hostedContent\": {}\n                    },\n                    \"createdBy\": {},\n                    \"outlineIcon\": {}\n                  }\n                ]\n              },\n              \"teamsAppDefinition\": {}\n            }\n          ],\n          \"lastMessagePreview\": {\n            \"body\": {},\n            \"eventDetail\": {},\n            \"from\": {\n              \"@odata.type\": \"#microsoft.graph.chatMessageFromIdentitySet\"\n            }\n          },\n          \"members\": [\n            {\n              \"roles\": [\n                null\n              ]\n            }\n          ],\n          \"messages\": [\n            {\n              \"attachments\": [\n                {}\n              ],\n              \"body\": {},\n              \"channelIdentity\": {},\n              \"eventDetail\": {},\n              \"from\": {},\n              \"hostedContents\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.chatMessageHostedContent\"\n                }\n              ],\n              \"mentions\": [\n                {\n                  \"mentioned\": {\n                    \"@odata.type\": \"#microsoft.graph.chatMessageMentionedIdentitySet\",\n                    \"conversation\": {\n                      \"@odata.type\": \"#microsoft.graph.teamworkConversationIdentity\"\n                    },\n                    \"tag\": {\n                      \"@odata.type\": \"#microsoft.graph.teamworkTagIdentity\"\n                    }\n                  }\n                }\n              ],\n              \"messageHistory\": [\n                {\n                  \"reaction\": {\n                    \"user\": {\n                      \"@odata.type\": \"#microsoft.graph.chatMessageReactionIdentitySet\"\n                    }\n                  }\n                }\n              ],\n              \"messageType\": {},\n              \"onBehalfOf\": {},\n              \"policyViolation\": {\n                \"policyTip\": {\n                  \"matchedConditionDescriptions\": [\n                    null\n                  ]\n                }\n              },\n              \"reactions\": [\n                {}\n              ],\n              \"replies\": [\n                {}\n              ]\n            }\n          ],\n          \"onlineMeetingInfo\": {\n            \"organizer\": {\n              \"@odata.type\": \"#microsoft.graph.teamworkUserIdentity\"\n            }\n          },\n          \"operations\": [\n            {\n              \"error\": {}\n            }\n          ],\n          \"permissionGrants\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.resourceSpecificPermissionGrant\"\n            }\n          ],\n          \"pinnedMessages\": [\n            {\n              \"message\": {}\n            }\n          ],\n          \"tabs\": [\n            {\n              \"configuration\": {},\n              \"teamsApp\": {}\n            }\n          ],\n          \"viewpoint\": {}\n        }\n      ],\n      \"cloudPCs\": [\n        {\n          \"connectivityResult\": {\n            \"failedHealthCheckItems\": [\n              {}\n            ]\n          },\n          \"lastLoginResult\": {},\n          \"lastRemoteActionResult\": {\n            \"statusDetails\": {\n              \"additionalInformation\": [\n                {}\n              ]\n            }\n          },\n          \"partnerAgentInstallResults\": [\n            {}\n          ],\n          \"statusDetails\": {}\n        }\n      ],\n      \"contactFolders\": [\n        {\n          \"childFolders\": [\n            {}\n          ],\n          \"contacts\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.contact\",\n              \"children\": [\n                null\n              ],\n              \"emailAddresses\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.typedEmailAddress\"\n                }\n              ],\n              \"extensions\": [\n                {}\n              ],\n              \"flag\": {\n                \"completedDateTime\": {},\n                \"dueDateTime\": {},\n                \"startDateTime\": {}\n              },\n              \"imAddresses\": [\n                null\n              ],\n              \"multiValueExtendedProperties\": [\n                {}\n              ],\n              \"phones\": [\n                {}\n              ],\n              \"photo\": {},\n              \"postalAddresses\": [\n                {}\n              ],\n              \"singleValueExtendedProperties\": [\n                {}\n              ],\n              \"websites\": [\n                {}\n              ]\n            }\n          ],\n          \"multiValueExtendedProperties\": [\n            {}\n          ],\n          \"singleValueExtendedProperties\": [\n            {}\n          ]\n        }\n      ],\n      \"contacts\": [\n        {}\n      ],\n      \"createdObjects\": [\n        {}\n      ],\n      \"customSecurityAttributes\": {},\n      \"deviceEnrollmentConfigurations\": [\n        {\n          \"assignments\": [\n            {\n              \"target\": {}\n            }\n          ],\n          \"roleScopeTagIds\": [\n            null\n          ]\n        }\n      ],\n      \"deviceKeys\": [\n        {}\n      ],\n      \"deviceManagementTroubleshootingEvents\": [\n        {\n          \"additionalInformation\": [\n            {}\n          ],\n          \"troubleshootingErrorDetails\": {\n            \"resources\": [\n              {}\n            ]\n          }\n        }\n      ],\n      \"devices\": [\n        {}\n      ],\n      \"directReports\": [\n        {}\n      ],\n      \"drive\": {\n        \"@odata.type\": \"#microsoft.graph.drive\",\n        \"activities\": [\n          {\n            \"action\": {\n              \"comment\": {\n                \"parentAuthor\": {},\n                \"participants\": [\n                  {}\n                ]\n              },\n              \"create\": {},\n              \"delete\": {},\n              \"edit\": {},\n              \"mention\": {\n                \"mentionees\": [\n                  {}\n                ]\n              },\n              \"move\": {},\n              \"rename\": {},\n              \"restore\": {},\n              \"share\": {\n                \"recipients\": [\n                  {}\n                ]\n              },\n              \"version\": {}\n            },\n            \"actor\": {},\n            \"driveItem\": {\n              \"@odata.type\": \"#microsoft.graph.driveItem\",\n              \"activities\": [\n                {}\n              ],\n              \"analytics\": {\n                \"allTime\": {\n                  \"access\": {},\n                  \"activities\": [\n                    {\n                      \"access\": {},\n                      \"actor\": {},\n                      \"driveItem\": {}\n                    }\n                  ],\n                  \"create\": {},\n                  \"delete\": {},\n                  \"edit\": {},\n                  \"incompleteData\": {},\n                  \"move\": {}\n                },\n                \"itemActivityStats\": [\n                  {}\n                ],\n                \"lastSevenDays\": {}\n              },\n              \"audio\": {},\n              \"bundle\": {\n                \"album\": {}\n              },\n              \"children\": [\n                {}\n              ],\n              \"deleted\": {},\n              \"file\": {\n                \"hashes\": {}\n              },\n              \"fileSystemInfo\": {},\n              \"folder\": {\n                \"view\": {}\n              },\n              \"image\": {},\n              \"listItem\": {\n                \"@odata.type\": \"#microsoft.graph.listItem\",\n                \"activities\": [\n                  {}\n                ],\n                \"analytics\": {},\n                \"contentType\": {},\n                \"deleted\": {},\n                \"documentSetVersions\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.documentSetVersion\",\n                    \"lastModifiedBy\": {},\n                    \"publication\": {},\n                    \"fields\": {},\n                    \"createdBy\": {},\n                    \"items\": [\n                      {}\n                    ]\n                  }\n                ],\n                \"driveItem\": {},\n                \"fields\": {},\n                \"sharepointIds\": {},\n                \"versions\": [\n                  {}\n                ]\n              },\n              \"location\": {},\n              \"malware\": {},\n              \"media\": {\n                \"mediaSource\": {}\n              },\n              \"package\": {},\n              \"pendingOperations\": {\n                \"pendingContentUpdate\": {}\n              },\n              \"permissions\": [\n                {\n                  \"grantedTo\": {},\n                  \"grantedToIdentities\": [\n                    {}\n                  ],\n                  \"grantedToIdentitiesV2\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.sharePointIdentitySet\",\n                      \"group\": {},\n                      \"siteGroup\": {\n                        \"@odata.type\": \"#microsoft.graph.sharePointIdentity\"\n                      },\n                      \"siteUser\": {}\n                    }\n                  ],\n                  \"grantedToV2\": {},\n                  \"inheritedFrom\": {\n                    \"sharepointIds\": {}\n                  },\n                  \"invitation\": {\n                    \"invitedBy\": {}\n                  },\n                  \"link\": {\n                    \"application\": {}\n                  },\n                  \"roles\": [\n                    null\n                  ]\n                }\n              ],\n              \"photo\": {},\n              \"publication\": {},\n              \"remoteItem\": {\n                \"createdBy\": {},\n                \"file\": {},\n                \"fileSystemInfo\": {},\n                \"folder\": {},\n                \"image\": {},\n                \"lastModifiedBy\": {},\n                \"package\": {},\n                \"parentReference\": {},\n                \"shared\": {\n                  \"owner\": {},\n                  \"sharedBy\": {}\n                },\n                \"sharepointIds\": {},\n                \"specialFolder\": {},\n                \"video\": {}\n              },\n              \"root\": {},\n              \"searchResult\": {},\n              \"shared\": {},\n              \"sharepointIds\": {},\n              \"source\": {},\n              \"specialFolder\": {},\n              \"subscriptions\": [\n                {}\n              ],\n              \"thumbnails\": [\n                {\n                  \"large\": {},\n                  \"medium\": {},\n                  \"small\": {},\n                  \"source\": {}\n                }\n              ],\n              \"versions\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.driveItemVersion\"\n                }\n              ],\n              \"video\": {},\n              \"workbook\": {\n                \"application\": {},\n                \"comments\": [\n                  {\n                    \"replies\": [\n                      {}\n                    ]\n                  }\n                ],\n                \"functions\": {},\n                \"names\": [\n                  {\n                    \"value\": {},\n                    \"worksheet\": {\n                      \"charts\": [\n                        {\n                          \"axes\": {\n                            \"categoryAxis\": {\n                              \"format\": {\n                                \"font\": {},\n                                \"line\": {}\n                              },\n                              \"majorGridlines\": {\n                                \"format\": {\n                                  \"line\": {}\n                                }\n                              },\n                              \"majorUnit\": {},\n                              \"maximum\": {},\n                              \"minimum\": {},\n                              \"minorGridlines\": {},\n                              \"minorUnit\": {},\n                              \"title\": {\n                                \"format\": {\n                                  \"font\": {}\n                                }\n                              }\n                            },\n                            \"seriesAxis\": {},\n                            \"valueAxis\": {}\n                          },\n                          \"dataLabels\": {\n                            \"format\": {\n                              \"fill\": {},\n                              \"font\": {}\n                            }\n                          },\n                          \"format\": {\n                            \"fill\": {},\n                            \"font\": {}\n                          },\n                          \"legend\": {\n                            \"format\": {\n                              \"fill\": {},\n                              \"font\": {}\n                            }\n                          },\n                          \"series\": [\n                            {\n                              \"format\": {\n                                \"fill\": {},\n                                \"line\": {}\n                              },\n                              \"points\": [\n                                {\n                                  \"format\": {\n                                    \"fill\": {}\n                                  },\n                                  \"value\": {}\n                                }\n                              ]\n                            }\n                          ],\n                          \"title\": {\n                            \"format\": {\n                              \"fill\": {},\n                              \"font\": {}\n                            }\n                          },\n                          \"worksheet\": {}\n                        }\n                      ],\n                      \"names\": [\n                        {}\n                      ],\n                      \"pivotTables\": [\n                        {\n                          \"worksheet\": {}\n                        }\n                      ],\n                      \"protection\": {\n                        \"options\": {}\n                      },\n                      \"tables\": [\n                        {\n                          \"columns\": [\n                            {\n                              \"filter\": {\n                                \"criteria\": {\n                                  \"icon\": {},\n                                  \"values\": {}\n                                }\n                              },\n                              \"values\": {}\n                            }\n                          ],\n                          \"rows\": [\n                            {\n                              \"values\": {}\n                            }\n                          ],\n                          \"sort\": {\n                            \"fields\": [\n                              {\n                                \"icon\": {}\n                              }\n                            ]\n                          },\n                          \"worksheet\": {}\n                        }\n                      ]\n                    }\n                  }\n                ],\n                \"operations\": [\n                  {\n                    \"error\": {\n                      \"innerError\": {}\n                    }\n                  }\n                ],\n                \"tables\": [\n                  {}\n                ],\n                \"worksheets\": [\n                  {}\n                ]\n              }\n            },\n            \"listItem\": {},\n            \"times\": {}\n          }\n        ],\n        \"bundles\": [\n          {}\n        ],\n        \"following\": [\n          {}\n        ],\n        \"items\": [\n          {}\n        ],\n        \"list\": {\n          \"@odata.type\": \"#microsoft.graph.list\",\n          \"activities\": [\n            {}\n          ],\n          \"columns\": [\n            {\n              \"boolean\": {},\n              \"calculated\": {},\n              \"choice\": {\n                \"choices\": [\n                  null\n                ]\n              },\n              \"contentApprovalStatus\": {},\n              \"currency\": {},\n              \"dateTime\": {},\n              \"defaultValue\": {},\n              \"geolocation\": {},\n              \"hyperlinkOrPicture\": {},\n              \"lookup\": {},\n              \"number\": {},\n              \"personOrGroup\": {},\n              \"sourceColumn\": {},\n              \"sourceContentType\": {},\n              \"term\": {\n                \"parentTerm\": {\n                  \"children\": [\n                    {}\n                  ],\n                  \"descriptions\": [\n                    {}\n                  ],\n                  \"labels\": [\n                    {}\n                  ],\n                  \"properties\": [\n                    {}\n                  ],\n                  \"relations\": [\n                    {\n                      \"fromTerm\": {},\n                      \"set\": {\n                        \"children\": [\n                          {}\n                        ],\n                        \"localizedNames\": [\n                          {}\n                        ],\n                        \"parentGroup\": {\n                          \"sets\": [\n                            {}\n                          ]\n                        },\n                        \"properties\": [\n                          {}\n                        ],\n                        \"relations\": [\n                          {}\n                        ],\n                        \"terms\": [\n                          {}\n                        ]\n                      },\n                      \"toTerm\": {}\n                    }\n                  ],\n                  \"set\": {}\n                },\n                \"termSet\": {}\n              },\n              \"text\": {},\n              \"thumbnail\": {},\n              \"validation\": {\n                \"descriptions\": [\n                  {}\n                ]\n              }\n            }\n          ],\n          \"contentTypes\": [\n            {\n              \"associatedHubsUrls\": [\n                null\n              ],\n              \"base\": {},\n              \"baseTypes\": [\n                {}\n              ],\n              \"columnLinks\": [\n                {}\n              ],\n              \"columnPositions\": [\n                {}\n              ],\n              \"columns\": [\n                {}\n              ],\n              \"documentSet\": {\n                \"allowedContentTypes\": [\n                  {}\n                ],\n                \"defaultContents\": [\n                  {\n                    \"contentType\": {}\n                  }\n                ],\n                \"sharedColumns\": [\n                  {}\n                ],\n                \"welcomePageColumns\": [\n                  {}\n                ]\n              },\n              \"documentTemplate\": {},\n              \"inheritedFrom\": {},\n              \"order\": {}\n            }\n          ],\n          \"drive\": {},\n          \"items\": [\n            {}\n          ],\n          \"list\": {},\n          \"operations\": [\n            {\n              \"error\": {\n                \"details\": [\n                  {}\n                ],\n                \"innerError\": {\n                  \"details\": [\n                    {}\n                  ]\n                }\n              }\n            }\n          ],\n          \"sharepointIds\": {},\n          \"subscriptions\": [\n            {}\n          ],\n          \"system\": {}\n        },\n        \"owner\": {},\n        \"quota\": {\n          \"storagePlanInformation\": {}\n        },\n        \"root\": {},\n        \"sharePointIds\": {},\n        \"special\": [\n          {}\n        ],\n        \"system\": {}\n      },\n      \"drives\": [\n        {}\n      ],\n      \"employeeOrgData\": {},\n      \"events\": [\n        {}\n      ],\n      \"extensions\": [\n        {}\n      ],\n      \"followedSites\": [\n        {}\n      ],\n      \"identities\": [\n        {}\n      ],\n      \"imAddresses\": [\n        null\n      ],\n      \"inferenceClassification\": {\n        \"overrides\": [\n          {\n            \"senderEmailAddress\": {}\n          }\n        ]\n      },\n      \"infoCatalogs\": [\n        null\n      ],\n      \"informationProtection\": {\n        \"bitlocker\": {\n          \"recoveryKeys\": [\n            {}\n          ]\n        },\n        \"dataLossPreventionPolicies\": [\n          {}\n        ],\n        \"policy\": {\n          \"labels\": [\n            {\n              \"parent\": {\n                \"parent\": {}\n              }\n            }\n          ]\n        },\n        \"sensitivityLabels\": [\n          {\n            \"assignedPolicies\": [\n              {}\n            ],\n            \"autoLabeling\": {\n              \"sensitiveTypeIds\": [\n                null\n              ]\n            },\n            \"labelActions\": [\n              {}\n            ],\n            \"sublabels\": [\n              {}\n            ]\n          }\n        ],\n        \"sensitivityPolicySettings\": {\n          \"applicableTo\": {}\n        },\n        \"threatAssessmentRequests\": [\n          {\n            \"createdBy\": {},\n            \"results\": [\n              {}\n            ]\n          }\n        ]\n      },\n      \"insights\": {\n        \"shared\": [\n          {\n            \"lastShared\": {\n              \"sharedBy\": {},\n              \"sharingReference\": {}\n            },\n            \"lastSharedMethod\": {},\n            \"resource\": {},\n            \"resourceReference\": {},\n            \"resourceVisualization\": {},\n            \"sharingHistory\": [\n              {}\n            ]\n          }\n        ],\n        \"trending\": [\n          {\n            \"resource\": {},\n            \"resourceReference\": {},\n            \"resourceVisualization\": {}\n          }\n        ],\n        \"used\": [\n          {\n            \"lastUsed\": {},\n            \"resource\": {},\n            \"resourceReference\": {},\n            \"resourceVisualization\": {}\n          }\n        ]\n      },\n      \"interests\": [\n        null\n      ],\n      \"joinedGroups\": [\n        {\n          \"@odata.type\": \"#microsoft.graph.group\",\n          \"acceptedSenders\": [\n            {}\n          ],\n          \"appRoleAssignments\": [\n            {}\n          ],\n          \"assignedLabels\": [\n            {}\n          ],\n          \"assignedLicenses\": [\n            {}\n          ],\n          \"calendar\": {},\n          \"calendarView\": [\n            {}\n          ],\n          \"conversations\": [\n            {\n              \"threads\": [\n                {\n                  \"ccRecipients\": [\n                    {}\n                  ],\n                  \"posts\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.post\",\n                      \"attachments\": [\n                        {}\n                      ],\n                      \"body\": {},\n                      \"extensions\": [\n                        {}\n                      ],\n                      \"from\": {},\n                      \"importance\": {},\n                      \"inReplyTo\": {},\n                      \"mentions\": [\n                        {\n                          \"createdBy\": {},\n                          \"mentioned\": {}\n                        }\n                      ],\n                      \"multiValueExtendedProperties\": [\n                        {}\n                      ],\n                      \"newParticipants\": [\n                        {}\n                      ],\n                      \"sender\": {},\n                      \"singleValueExtendedProperties\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"toRecipients\": [\n                    {}\n                  ],\n                  \"uniqueSenders\": [\n                    null\n                  ]\n                }\n              ],\n              \"uniqueSenders\": [\n                null\n              ]\n            }\n          ],\n          \"createdOnBehalfOf\": {},\n          \"drive\": {},\n          \"drives\": [\n            {}\n          ],\n          \"endpoints\": [\n            {}\n          ],\n          \"events\": [\n            {}\n          ],\n          \"extensions\": [\n            {}\n          ],\n          \"groupLifecyclePolicies\": [\n            {}\n          ],\n          \"groupTypes\": [\n            null\n          ],\n          \"infoCatalogs\": [\n            null\n          ],\n          \"licenseProcessingState\": {},\n          \"memberOf\": [\n            {}\n          ],\n          \"members\": [\n            {}\n          ],\n          \"membersWithLicenseErrors\": [\n            {}\n          ],\n          \"membershipRuleProcessingStatus\": {},\n          \"onPremisesProvisioningErrors\": [\n            {}\n          ],\n          \"onenote\": {\n            \"notebooks\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.notebook\",\n                \"createdBy\": {},\n                \"lastModifiedBy\": {},\n                \"links\": {\n                  \"oneNoteClientUrl\": {},\n                  \"oneNoteWebUrl\": {}\n                },\n                \"sectionGroups\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.sectionGroup\",\n                    \"parentNotebook\": {},\n                    \"parentSectionGroup\": {},\n                    \"sectionGroups\": [\n                      {}\n                    ],\n                    \"sections\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.onenoteSection\",\n                        \"links\": {\n                          \"oneNoteClientUrl\": {},\n                          \"oneNoteWebUrl\": {}\n                        },\n                        \"pages\": [\n                          {\n                            \"@odata.type\": \"#microsoft.graph.onenotePage\",\n                            \"links\": {\n                              \"oneNoteClientUrl\": {},\n                              \"oneNoteWebUrl\": {}\n                            },\n                            \"parentNotebook\": {},\n                            \"parentSection\": {},\n                            \"userTags\": [\n                              null\n                            ]\n                          }\n                        ],\n                        \"parentNotebook\": {},\n                        \"parentSectionGroup\": {}\n                      }\n                    ]\n                  }\n                ],\n                \"sections\": [\n                  {}\n                ]\n              }\n            ],\n            \"operations\": [\n              {\n                \"error\": {}\n              }\n            ],\n            \"pages\": [\n              {}\n            ],\n            \"resources\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.onenoteResource\"\n              }\n            ],\n            \"sectionGroups\": [\n              {}\n            ],\n            \"sections\": [\n              {}\n            ]\n          },\n          \"owners\": [\n            {}\n          ],\n          \"permissionGrants\": [\n            {}\n          ],\n          \"photo\": {},\n          \"photos\": [\n            {}\n          ],\n          \"planner\": {\n            \"plans\": [\n              {\n                \"buckets\": [\n                  {\n                    \"creationSource\": {},\n                    \"tasks\": [\n                      {\n                        \"appliedCategories\": {},\n                        \"assignedToTaskBoardFormat\": {\n                          \"orderHintsByAssignee\": {}\n                        },\n                        \"assignments\": {},\n                        \"bucketTaskBoardFormat\": {},\n                        \"completedBy\": {},\n                        \"createdBy\": {},\n                        \"creationSource\": {\n                          \"creationSourceKind\": {},\n                          \"teamsPublicationInfo\": {\n                            \"@odata.type\": \"#microsoft.graph.plannerTeamsPublicationInfo\"\n                          }\n                        },\n                        \"details\": {\n                          \"checklist\": {},\n                          \"notes\": {},\n                          \"references\": {}\n                        },\n                        \"previewType\": {},\n                        \"progressTaskBoardFormat\": {},\n                        \"recurrence\": {\n                          \"schedule\": {\n                            \"pattern\": {}\n                          }\n                        }\n                      }\n                    ]\n                  }\n                ],\n                \"container\": {},\n                \"contexts\": {},\n                \"createdBy\": {},\n                \"creationSource\": {\n                  \"creationSourceKind\": {}\n                },\n                \"details\": {\n                  \"categoryDescriptions\": {},\n                  \"contextDetails\": {},\n                  \"sharedWith\": {}\n                },\n                \"sharedWithContainers\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.plannerSharedWithContainer\"\n                  }\n                ],\n                \"tasks\": [\n                  {}\n                ]\n              }\n            ]\n          },\n          \"proxyAddresses\": [\n            null\n          ],\n          \"rejectedSenders\": [\n            {}\n          ],\n          \"resourceBehaviorOptions\": [\n            null\n          ],\n          \"resourceProvisioningOptions\": [\n            null\n          ],\n          \"settings\": [\n            {\n              \"values\": [\n                {}\n              ]\n            }\n          ],\n          \"sites\": [\n            {}\n          ],\n          \"team\": {\n            \"allChannels\": [\n              {\n                \"filesFolder\": {},\n                \"members\": [\n                  {}\n                ],\n                \"messages\": [\n                  {}\n                ],\n                \"moderationSettings\": {},\n                \"sharedWithTeams\": [\n                  {\n                    \"team\": {},\n                    \"allowedMembers\": [\n                      {}\n                    ]\n                  }\n                ],\n                \"summary\": {},\n                \"tabs\": [\n                  {}\n                ]\n              }\n            ],\n            \"channels\": [\n              {}\n            ],\n            \"discoverySettings\": {},\n            \"funSettings\": {},\n            \"group\": {},\n            \"guestSettings\": {},\n            \"incomingChannels\": [\n              {}\n            ],\n            \"installedApps\": [\n              {}\n            ],\n            \"memberSettings\": {},\n            \"members\": [\n              {}\n            ],\n            \"messagingSettings\": {},\n            \"operations\": [\n              {}\n            ],\n            \"owners\": [\n              {}\n            ],\n            \"permissionGrants\": [\n              {}\n            ],\n            \"photo\": {},\n            \"primaryChannel\": {},\n            \"schedule\": {\n              \"offerShiftRequests\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.offerShiftRequest\",\n                  \"createdBy\": {},\n                  \"lastModifiedBy\": {}\n                }\n              ],\n              \"openShiftChangeRequests\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.openShiftChangeRequest\"\n                }\n              ],\n              \"openShifts\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.openShift\",\n                  \"draftOpenShift\": {\n                    \"@odata.type\": \"#microsoft.graph.openShiftItem\",\n                    \"activities\": [\n                      {\n                        \"theme\": {}\n                      }\n                    ]\n                  },\n                  \"sharedOpenShift\": {}\n                }\n              ],\n              \"provisionStatus\": {},\n              \"schedulingGroups\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.schedulingGroup\",\n                  \"userIds\": [\n                    null\n                  ]\n                }\n              ],\n              \"shifts\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.shift\",\n                  \"draftShift\": {},\n                  \"sharedShift\": {}\n                }\n              ],\n              \"swapShiftsChangeRequests\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.swapShiftsChangeRequest\"\n                }\n              ],\n              \"timeCards\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.timeCard\",\n                  \"breaks\": [\n                    {\n                      \"end\": {\n                        \"notes\": {}\n                      },\n                      \"notes\": {},\n                      \"start\": {}\n                    }\n                  ],\n                  \"clockInEvent\": {},\n                  \"clockOutEvent\": {},\n                  \"notes\": {},\n                  \"originalEntry\": {\n                    \"breaks\": [\n                      {}\n                    ],\n                    \"clockInEvent\": {},\n                    \"clockOutEvent\": {}\n                  }\n                }\n              ],\n              \"timeClockSettings\": {\n                \"approvedLocation\": {}\n              },\n              \"timeOffReasons\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.timeOffReason\"\n                }\n              ],\n              \"timeOffRequests\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.timeOffRequest\"\n                }\n              ],\n              \"timesOff\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.timeOff\",\n                  \"draftTimeOff\": {},\n                  \"sharedTimeOff\": {}\n                }\n              ],\n              \"workforceIntegrationIds\": [\n                null\n              ]\n            },\n            \"summary\": {},\n            \"tags\": [\n              {\n                \"members\": [\n                  {}\n                ]\n              }\n            ],\n            \"template\": {},\n            \"templateDefinition\": {\n              \"categories\": [\n                null\n              ],\n              \"lastModifiedBy\": {},\n              \"teamDefinition\": {}\n            }\n          },\n          \"threads\": [\n            {}\n          ],\n          \"transitiveMemberOf\": [\n            {}\n          ],\n          \"transitiveMembers\": [\n            {}\n          ],\n          \"writebackConfiguration\": {}\n        }\n      ],\n      \"joinedTeams\": [\n        {}\n      ],\n      \"licenseAssignmentStates\": [\n        {\n          \"disabledPlans\": [\n            null\n          ]\n        }\n      ],\n      \"licenseDetails\": [\n        {}\n      ],\n      \"mailFolders\": [\n        {\n          \"childFolders\": [\n            {}\n          ],\n          \"messageRules\": [\n            {\n              \"actions\": {\n                \"assignCategories\": [\n                  null\n                ],\n                \"forwardAsAttachmentTo\": [\n                  {}\n                ],\n                \"forwardTo\": [\n                  {}\n                ],\n                \"markImportance\": {},\n                \"redirectTo\": [\n                  {}\n                ]\n              },\n              \"conditions\": {\n                \"bodyContains\": [\n                  null\n                ],\n                \"bodyOrSubjectContains\": [\n                  null\n                ],\n                \"categories\": [\n                  null\n                ],\n                \"fromAddresses\": [\n                  {}\n                ],\n                \"headerContains\": [\n                  null\n                ],\n                \"importance\": {},\n                \"recipientContains\": [\n                  null\n                ],\n                \"senderContains\": [\n                  null\n                ],\n                \"sensitivity\": {},\n                \"sentToAddresses\": [\n                  {}\n                ],\n                \"subjectContains\": [\n                  null\n                ],\n                \"withinSizeRange\": {}\n              },\n              \"exceptions\": {}\n            }\n          ],\n          \"messages\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.message\",\n              \"attachments\": [\n                {}\n              ],\n              \"bccRecipients\": [\n                {}\n              ],\n              \"body\": {},\n              \"ccRecipients\": [\n                {}\n              ],\n              \"extensions\": [\n                {}\n              ],\n              \"flag\": {},\n              \"from\": {},\n              \"importance\": {},\n              \"inferenceClassification\": {},\n              \"internetMessageHeaders\": [\n                {}\n              ],\n              \"mentions\": [\n                {}\n              ],\n              \"mentionsPreview\": {},\n              \"multiValueExtendedProperties\": [\n                {}\n              ],\n              \"replyTo\": [\n                {}\n              ],\n              \"sender\": {},\n              \"singleValueExtendedProperties\": [\n                {}\n              ],\n              \"toRecipients\": [\n                {}\n              ],\n              \"uniqueBody\": {},\n              \"unsubscribeData\": [\n                null\n              ]\n            }\n          ],\n          \"multiValueExtendedProperties\": [\n            {}\n          ],\n          \"singleValueExtendedProperties\": [\n            {}\n          ],\n          \"userConfigurations\": [\n            {}\n          ]\n        }\n      ],\n      \"mailboxSettings\": {\n        \"automaticRepliesSetting\": {\n          \"scheduledEndDateTime\": {},\n          \"scheduledStartDateTime\": {}\n        },\n        \"language\": {},\n        \"workingHours\": {\n          \"daysOfWeek\": [\n            {}\n          ],\n          \"timeZone\": {}\n        }\n      },\n      \"managedAppRegistrations\": [\n        {\n          \"appIdentifier\": {},\n          \"appliedPolicies\": [\n            {\n              \"roleScopeTagIds\": [\n                null\n              ]\n            }\n          ],\n          \"flaggedReasons\": [\n            null\n          ],\n          \"intendedPolicies\": [\n            {}\n          ],\n          \"operations\": [\n            {}\n          ]\n        }\n      ],\n      \"managedDevices\": [\n        {\n          \"assignmentFilterEvaluationStatusDetails\": [\n            {}\n          ],\n          \"chromeOSDeviceInfo\": [\n            {}\n          ],\n          \"cloudPcRemoteActionResults\": [\n            {}\n          ],\n          \"configurationManagerClientEnabledFeatures\": {},\n          \"configurationManagerClientHealthState\": {},\n          \"configurationManagerClientInformation\": {},\n          \"detectedApps\": [\n            {\n              \"managedDevices\": [\n                {}\n              ]\n            }\n          ],\n          \"deviceActionResults\": [\n            {\n              \"actionState\": {}\n            }\n          ],\n          \"deviceCategory\": {\n            \"roleScopeTagIds\": [\n              null\n            ]\n          },\n          \"deviceCompliancePolicyStates\": [\n            {\n              \"settingStates\": [\n                {\n                  \"sources\": [\n                    {}\n                  ]\n                }\n              ],\n              \"state\": {}\n            }\n          ],\n          \"deviceConfigurationStates\": [\n            {\n              \"platformType\": {},\n              \"settingStates\": [\n                {\n                  \"sources\": [\n                    {}\n                  ],\n                  \"state\": {}\n                }\n              ],\n              \"state\": {}\n            }\n          ],\n          \"deviceHealthAttestationState\": {},\n          \"deviceHealthScriptStates\": [\n            {\n              \"assignmentFilterIds\": [\n                null\n              ]\n            }\n          ],\n          \"hardwareInformation\": {\n            \"sharedDeviceCachedUsers\": [\n              {}\n            ],\n            \"wiredIPv4Addresses\": [\n              null\n            ]\n          },\n          \"logCollectionRequests\": [\n            {}\n          ],\n          \"managedDeviceMobileAppConfigurationStates\": [\n            {\n              \"platformType\": {},\n              \"settingStates\": [\n                {\n                  \"sources\": [\n                    {}\n                  ],\n                  \"state\": {}\n                }\n              ],\n              \"state\": {}\n            }\n          ],\n          \"roleScopeTagIds\": [\n            null\n          ],\n          \"securityBaselineStates\": [\n            {\n              \"settingStates\": [\n                {\n                  \"contributingPolicies\": [\n                    {}\n                  ],\n                  \"sourcePolicies\": [\n                    {}\n                  ]\n                }\n              ],\n              \"state\": {}\n            }\n          ],\n          \"users\": [\n            {}\n          ],\n          \"usersLoggedOn\": [\n            {}\n          ],\n          \"windowsProtectionState\": {\n            \"detectedMalwareState\": [\n              {}\n            ]\n          }\n        }\n      ],\n      \"manager\": {},\n      \"memberOf\": [\n        {}\n      ],\n      \"messages\": [\n        {}\n      ],\n      \"mobileAppIntentAndStates\": [\n        {\n          \"mobileAppList\": [\n            {\n              \"supportedDeviceTypes\": [\n                {\n                  \"type\": {}\n                }\n              ]\n            }\n          ]\n        }\n      ],\n      \"mobileAppTroubleshootingEvents\": [\n        {\n          \"appLogCollectionRequests\": [\n            {\n              \"customLogFolders\": [\n                null\n              ]\n            }\n          ],\n          \"history\": [\n            {\n              \"troubleshootingErrorDetails\": {}\n            }\n          ]\n        }\n      ],\n      \"notifications\": [\n        {\n          \"payload\": {\n            \"visualContent\": {}\n          },\n          \"targetPolicy\": {\n            \"platformTypes\": [\n              null\n            ]\n          }\n        }\n      ],\n      \"oauth2PermissionGrants\": [\n        {}\n      ],\n      \"onPremisesExtensionAttributes\": {},\n      \"onPremisesProvisioningErrors\": [\n        {}\n      ],\n      \"onenote\": {},\n      \"onlineMeetings\": [\n        {\n          \"anonymizeIdentityForRoles\": [\n            null\n          ],\n          \"attendanceReports\": [\n            {\n              \"attendanceRecords\": [\n                {\n                  \"attendanceIntervals\": [\n                    {}\n                  ],\n                  \"identity\": {}\n                }\n              ]\n            }\n          ],\n          \"audioConferencing\": {\n            \"tollFreeNumbers\": [\n              null\n            ],\n            \"tollNumbers\": [\n              null\n            ]\n          },\n          \"broadcastSettings\": {\n            \"captions\": {\n              \"translationLanguages\": [\n                null\n              ]\n            }\n          },\n          \"capabilities\": [\n            null\n          ],\n          \"chatInfo\": {},\n          \"joinInformation\": {},\n          \"joinMeetingIdSettings\": {},\n          \"lobbyBypassSettings\": {},\n          \"meetingAttendanceReport\": {},\n          \"participants\": {\n            \"attendees\": [\n              {\n                \"identity\": {},\n                \"role\": {}\n              }\n            ],\n            \"contributors\": [\n              {}\n            ],\n            \"organizer\": {},\n            \"producers\": [\n              {}\n            ]\n          },\n          \"registration\": {\n            \"@odata.type\": \"#microsoft.graph.meetingRegistration\",\n            \"registrants\": [\n              {}\n            ],\n            \"customQuestions\": [\n              {\n                \"answerOptions\": [\n                  null\n                ]\n              }\n            ],\n            \"speakers\": [\n              {}\n            ]\n          },\n          \"transcripts\": [\n            {}\n          ],\n          \"virtualAppointment\": {\n            \"appointmentClients\": [\n              {}\n            ],\n            \"settings\": {}\n          },\n          \"watermarkProtection\": {}\n        }\n      ],\n      \"otherMails\": [\n        null\n      ],\n      \"outlook\": {\n        \"masterCategories\": [\n          {}\n        ],\n        \"taskFolders\": [\n          {\n            \"multiValueExtendedProperties\": [\n              {}\n            ],\n            \"singleValueExtendedProperties\": [\n              {}\n            ],\n            \"tasks\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.outlookTask\",\n                \"attachments\": [\n                  {}\n                ],\n                \"body\": {},\n                \"completedDateTime\": {},\n                \"dueDateTime\": {},\n                \"importance\": {},\n                \"multiValueExtendedProperties\": [\n                  {}\n                ],\n                \"recurrence\": {},\n                \"reminderDateTime\": {},\n                \"sensitivity\": {},\n                \"singleValueExtendedProperties\": [\n                  {}\n                ],\n                \"startDateTime\": {}\n              }\n            ]\n          }\n        ],\n        \"taskGroups\": [\n          {\n            \"taskFolders\": [\n              {}\n            ]\n          }\n        ],\n        \"tasks\": [\n          {}\n        ]\n      },\n      \"ownedDevices\": [\n        {}\n      ],\n      \"ownedObjects\": [\n        {}\n      ],\n      \"passwordProfile\": {},\n      \"pastProjects\": [\n        null\n      ],\n      \"pendingAccessReviewInstances\": [\n        {\n          \"contactedReviewers\": [\n            {}\n          ],\n          \"decisions\": [\n            {\n              \"appliedBy\": {\n                \"@odata.type\": \"#microsoft.graph.userIdentity\"\n              },\n              \"insights\": [\n                {}\n              ],\n              \"instance\": {},\n              \"principal\": {},\n              \"principalResourceMembership\": {},\n              \"resource\": {},\n              \"reviewedBy\": {},\n              \"target\": {}\n            }\n          ],\n          \"definition\": {\n            \"additionalNotificationRecipients\": [\n              {\n                \"notificationRecipientScope\": {}\n              }\n            ],\n            \"backupReviewers\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.accessReviewReviewerScope\"\n              }\n            ],\n            \"createdBy\": {},\n            \"fallbackReviewers\": [\n              {}\n            ],\n            \"instanceEnumerationScope\": {},\n            \"instances\": [\n              {}\n            ],\n            \"reviewers\": [\n              {}\n            ],\n            \"scope\": {},\n            \"settings\": {\n              \"applyActions\": [\n                {}\n              ],\n              \"recommendationInsightSettings\": [\n                {}\n              ],\n              \"recurrence\": {}\n            },\n            \"stageSettings\": [\n              {\n                \"decisionsThatWillMoveToNextStage\": [\n                  null\n                ],\n                \"dependsOn\": [\n                  null\n                ],\n                \"fallbackReviewers\": [\n                  {}\n                ],\n                \"recommendationInsightSettings\": [\n                  {}\n                ],\n                \"reviewers\": [\n                  {}\n                ]\n              }\n            ]\n          },\n          \"errors\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.accessReviewError\"\n            }\n          ],\n          \"fallbackReviewers\": [\n            {}\n          ],\n          \"reviewers\": [\n            {}\n          ],\n          \"scope\": {},\n          \"stages\": [\n            {\n              \"decisions\": [\n                {}\n              ],\n              \"fallbackReviewers\": [\n                {}\n              ],\n              \"reviewers\": [\n                {}\n              ]\n            }\n          ]\n        }\n      ],\n      \"people\": [\n        {\n          \"emailAddresses\": [\n            {}\n          ],\n          \"phones\": [\n            {}\n          ],\n          \"postalAddresses\": [\n            {}\n          ],\n          \"sources\": [\n            {}\n          ],\n          \"websites\": [\n            {}\n          ]\n        }\n      ],\n      \"photo\": {},\n      \"photos\": [\n        {}\n      ],\n      \"planner\": {\n        \"all\": [\n          {}\n        ],\n        \"favoritePlanReferences\": {},\n        \"favoritePlans\": [\n          {}\n        ],\n        \"plans\": [\n          {}\n        ],\n        \"recentPlanReferences\": {},\n        \"recentPlans\": [\n          {}\n        ],\n        \"rosterPlans\": [\n          {}\n        ],\n        \"tasks\": [\n          {}\n        ]\n      },\n      \"presence\": {\n        \"outOfOfficeSettings\": {},\n        \"statusMessage\": {\n          \"expiryDateTime\": {},\n          \"message\": {}\n        }\n      },\n      \"print\": {\n        \"recentPrinterShares\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.printerShare\",\n            \"capabilities\": {\n              \"bottomMargins\": [\n                null\n              ],\n              \"colorModes\": [\n                null\n              ],\n              \"contentTypes\": [\n                null\n              ],\n              \"copiesPerJob\": {},\n              \"dpis\": [\n                null\n              ],\n              \"duplexModes\": [\n                null\n              ],\n              \"feedDirections\": [\n                null\n              ],\n              \"feedOrientations\": [\n                null\n              ],\n              \"finishings\": [\n                null\n              ],\n              \"inputBins\": [\n                null\n              ],\n              \"leftMargins\": [\n                null\n              ],\n              \"mediaColors\": [\n                null\n              ],\n              \"mediaSizes\": [\n                null\n              ],\n              \"mediaTypes\": [\n                null\n              ],\n              \"multipageLayouts\": [\n                null\n              ],\n              \"orientations\": [\n                null\n              ],\n              \"outputBins\": [\n                null\n              ],\n              \"pagesPerSheet\": [\n                null\n              ],\n              \"qualities\": [\n                null\n              ],\n              \"rightMargins\": [\n                null\n              ],\n              \"scalings\": [\n                null\n              ],\n              \"supportedColorConfigurations\": [\n                null\n              ],\n              \"supportedCopiesPerJob\": {},\n              \"supportedDocumentMimeTypes\": [\n                null\n              ],\n              \"supportedDuplexConfigurations\": [\n                null\n              ],\n              \"supportedFinishings\": [\n                {}\n              ],\n              \"supportedMediaColors\": [\n                null\n              ],\n              \"supportedMediaSizes\": [\n                null\n              ],\n              \"supportedMediaTypes\": [\n                null\n              ],\n              \"supportedOrientations\": [\n                {}\n              ],\n              \"supportedOutputBins\": [\n                null\n              ],\n              \"supportedPagesPerSheet\": {},\n              \"supportedPresentationDirections\": [\n                null\n              ],\n              \"supportedPrintQualities\": [\n                {}\n              ],\n              \"topMargins\": [\n                null\n              ]\n            },\n            \"defaults\": {\n              \"colorMode\": {},\n              \"duplexConfiguration\": {},\n              \"duplexMode\": {},\n              \"finishings\": [\n                {}\n              ],\n              \"multipageLayout\": {},\n              \"orientation\": {},\n              \"presentationDirection\": {},\n              \"printColorConfiguration\": {},\n              \"printQuality\": {},\n              \"quality\": {},\n              \"scaling\": {}\n            },\n            \"jobs\": [\n              {\n                \"configuration\": {\n                  \"colorMode\": {},\n                  \"duplexMode\": {},\n                  \"feedOrientation\": {},\n                  \"finishings\": [\n                    {}\n                  ],\n                  \"margin\": {},\n                  \"multipageLayout\": {},\n                  \"orientation\": {},\n                  \"pageRanges\": [\n                    {}\n                  ],\n                  \"quality\": {},\n                  \"scaling\": {}\n                },\n                \"createdBy\": {},\n                \"documents\": [\n                  {\n                    \"configuration\": {\n                      \"colorMode\": {},\n                      \"duplexMode\": {},\n                      \"feedDirection\": {},\n                      \"feedOrientation\": {},\n                      \"finishings\": [\n                        {}\n                      ],\n                      \"margin\": {},\n                      \"multipageLayout\": {},\n                      \"orientation\": {},\n                      \"pageRanges\": [\n                        {}\n                      ],\n                      \"quality\": {},\n                      \"scaling\": {}\n                    }\n                  }\n                ],\n                \"status\": {\n                  \"details\": [\n                    null\n                  ],\n                  \"state\": {}\n                },\n                \"tasks\": [\n                  {\n                    \"definition\": {\n                      \"createdBy\": {},\n                      \"tasks\": [\n                        {}\n                      ]\n                    },\n                    \"status\": {},\n                    \"trigger\": {\n                      \"definition\": {}\n                    }\n                  }\n                ]\n              }\n            ],\n            \"location\": {\n              \"organization\": [\n                null\n              ],\n              \"subdivision\": [\n                null\n              ],\n              \"subunit\": [\n                null\n              ]\n            },\n            \"status\": {\n              \"details\": [\n                null\n              ],\n              \"processingStateReasons\": [\n                null\n              ],\n              \"state\": {}\n            },\n            \"allowedGroups\": [\n              {}\n            ],\n            \"allowedUsers\": [\n              {}\n            ],\n            \"printer\": {\n              \"@odata.type\": \"#microsoft.graph.printer\",\n              \"connectors\": [\n                {\n                  \"deviceHealth\": {},\n                  \"location\": {}\n                }\n              ],\n              \"share\": {},\n              \"shares\": [\n                {}\n              ],\n              \"taskTriggers\": [\n                {}\n              ]\n            },\n            \"viewPoint\": {}\n          }\n        ]\n      },\n      \"profile\": {\n        \"account\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.userAccountInformation\",\n            \"createdBy\": {},\n            \"inference\": {},\n            \"lastModifiedBy\": {},\n            \"source\": {\n              \"type\": [\n                null\n              ]\n            },\n            \"preferredLanguageTag\": {}\n          }\n        ],\n        \"addresses\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.itemAddress\",\n            \"detail\": {},\n            \"geoCoordinates\": {}\n          }\n        ],\n        \"anniversaries\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personAnnualEvent\"\n          }\n        ],\n        \"awards\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personAward\"\n          }\n        ],\n        \"certifications\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personCertification\"\n          }\n        ],\n        \"educationalActivities\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.educationalActivity\",\n            \"institution\": {\n              \"location\": {}\n            },\n            \"program\": {\n              \"activities\": [\n                null\n              ],\n              \"awards\": [\n                null\n              ],\n              \"fieldsOfStudy\": [\n                null\n              ]\n            }\n          }\n        ],\n        \"emails\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.itemEmail\",\n            \"type\": {}\n          }\n        ],\n        \"interests\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personInterest\",\n            \"categories\": [\n              null\n            ],\n            \"collaborationTags\": [\n              null\n            ]\n          }\n        ],\n        \"languages\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.languageProficiency\",\n            \"reading\": {},\n            \"spoken\": {},\n            \"written\": {}\n          }\n        ],\n        \"names\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personName\",\n            \"pronunciation\": {}\n          }\n        ],\n        \"notes\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personAnnotation\",\n            \"detail\": {}\n          }\n        ],\n        \"patents\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.itemPatent\"\n          }\n        ],\n        \"phones\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.itemPhone\",\n            \"type\": {}\n          }\n        ],\n        \"positions\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.workPosition\",\n            \"categories\": [\n              null\n            ],\n            \"colleagues\": [\n              {}\n            ],\n            \"detail\": {\n              \"company\": {\n                \"address\": {}\n              }\n            },\n            \"manager\": {}\n          }\n        ],\n        \"projects\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.projectParticipation\",\n            \"categories\": [\n              null\n            ],\n            \"client\": {},\n            \"collaborationTags\": [\n              null\n            ],\n            \"colleagues\": [\n              {}\n            ],\n            \"detail\": {},\n            \"sponsors\": [\n              {}\n            ]\n          }\n        ],\n        \"publications\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.itemPublication\"\n          }\n        ],\n        \"skills\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.skillProficiency\",\n            \"categories\": [\n              null\n            ],\n            \"collaborationTags\": [\n              null\n            ]\n          }\n        ],\n        \"webAccounts\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.webAccount\",\n            \"service\": {}\n          }\n        ],\n        \"websites\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personWebsite\",\n            \"categories\": [\n              null\n            ]\n          }\n        ]\n      },\n      \"provisionedPlans\": [\n        {}\n      ],\n      \"proxyAddresses\": [\n        null\n      ],\n      \"registeredDevices\": [\n        {}\n      ],\n      \"responsibilities\": [\n        null\n      ],\n      \"schools\": [\n        null\n      ],\n      \"scopedRoleMemberOf\": [\n        {\n          \"roleMemberInfo\": {}\n        }\n      ],\n      \"security\": {\n        \"informationProtection\": {\n          \"labelPolicySettings\": {},\n          \"sensitivityLabels\": [\n            {\n              \"contentFormats\": [\n                null\n              ],\n              \"parent\": {}\n            }\n          ]\n        }\n      },\n      \"settings\": {\n        \"contactMergeSuggestions\": {},\n        \"itemInsights\": {},\n        \"regionalAndLanguageSettings\": {\n          \"authoringLanguages\": [\n            {}\n          ],\n          \"defaultDisplayLanguage\": {},\n          \"defaultRegionalFormat\": {},\n          \"defaultSpeechInputLanguage\": {},\n          \"defaultTranslationLanguage\": {},\n          \"regionalFormatOverrides\": {},\n          \"translationPreferences\": {\n            \"languageOverrides\": [\n              {}\n            ],\n            \"translationBehavior\": {},\n            \"untranslatedLanguages\": [\n              null\n            ]\n          }\n        },\n        \"shiftPreferences\": {\n          \"@odata.type\": \"#microsoft.graph.shiftPreferences\",\n          \"availability\": [\n            {\n              \"recurrence\": {},\n              \"timeSlots\": [\n                {}\n              ]\n            }\n          ]\n        }\n      },\n      \"signInActivity\": {},\n      \"skills\": [\n        null\n      ],\n      \"teamwork\": {\n        \"associatedTeams\": [\n          {}\n        ],\n        \"installedApps\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.userScopeTeamsAppInstallation\",\n            \"chat\": {}\n          }\n        ]\n      },\n      \"todo\": {\n        \"lists\": [\n          {\n            \"extensions\": [\n              {}\n            ],\n            \"tasks\": [\n              {\n                \"attachmentSessions\": [\n                  {\n                    \"nextExpectedRanges\": [\n                      null\n                    ]\n                  }\n                ],\n                \"attachments\": [\n                  {}\n                ],\n                \"body\": {},\n                \"categories\": [\n                  null\n                ],\n                \"checklistItems\": [\n                  {}\n                ],\n                \"completedDateTime\": {},\n                \"dueDateTime\": {},\n                \"extensions\": [\n                  {}\n                ],\n                \"importance\": {},\n                \"linkedResources\": [\n                  {}\n                ],\n                \"recurrence\": {},\n                \"reminderDateTime\": {},\n                \"startDateTime\": {},\n                \"status\": {}\n              }\n            ]\n          }\n        ]\n      },\n      \"transitiveMemberOf\": [\n        {}\n      ],\n      \"transitiveReports\": [\n        {}\n      ],\n      \"usageRights\": [\n        {}\n      ],\n      \"windowsInformationProtectionDeviceRegistrations\": [\n        {}\n      ]\n    },\n    \"lastModifiedBy\": {},\n    \"lastModifiedByUser\": {},\n    \"parentReference\": {},\n    \"analytics\": {},\n    \"columns\": [\n      {}\n    ],\n    \"contentTypes\": [\n      {}\n    ],\n    \"deleted\": {},\n    \"drive\": {},\n    \"drives\": [\n      {}\n    ],\n    \"externalColumns\": [\n      {}\n    ],\n    \"informationProtection\": {},\n    \"items\": [\n      {}\n    ],\n    \"lists\": [\n      {}\n    ],\n    \"onenote\": {},\n    \"operations\": [\n      {}\n    ],\n    \"pages\": [\n      {\n        \"@odata.type\": \"#microsoft.graph.sitePage\",\n        \"canvasLayout\": {\n          \"horizontalSections\": [\n            {\n              \"columns\": [\n                {\n                  \"webparts\": [\n                    {}\n                  ]\n                }\n              ]\n            }\n          ],\n          \"verticalSection\": {\n            \"emphasis\": {},\n            \"webparts\": [\n              {}\n            ]\n          }\n        },\n        \"contentType\": {},\n        \"publishingState\": {},\n        \"reactions\": {},\n        \"titleArea\": {\n          \"serverProcessedContent\": {\n            \"componentDependencies\": [\n              {}\n            ],\n            \"customMetadata\": [\n              {\n                \"value\": {}\n              }\n            ],\n            \"htmlStrings\": [\n              {}\n            ],\n            \"imageSources\": [\n              {}\n            ],\n            \"links\": [\n              {}\n            ],\n            \"searchablePlainTexts\": [\n              {}\n            ]\n          }\n        },\n        \"webParts\": [\n          {}\n        ]\n      }\n    ],\n    \"permissions\": [\n      {}\n    ],\n    \"root\": {},\n    \"settings\": {},\n    \"sharepointIds\": {},\n    \"siteCollection\": {\n      \"root\": {}\n    },\n    \"sites\": [\n      {}\n    ],\n    \"termStore\": {\n      \"groups\": [\n        {}\n      ],\n      \"languageTags\": [\n        null\n      ],\n      \"sets\": [\n        {}\n      ]\n    }\n  }\n]",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Remove"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/contentTypes/microsoft.graph.addCopy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Content Types Add Copy"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "contentType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "contentType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Content Types Add Copy"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/contentTypes/microsoft.graph.addCopyFromContentTypeHub",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Content Types Add Copy From Content Type Hub"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id",
			"name": "contentTypeId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "contentTypeId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Content Types Add Copy From Content Type Hub"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/microsoft.graph.associateWithHubSites",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Content Types Content Type Associate With Hub Sites"
					]
				}
			}
		},
		{
			"displayName": "Hub Site Urls",
			"name": "hubSiteUrls",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "hubSiteUrls",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Content Types Content Type Associate With Hub Sites"
					]
				}
			}
		},
		{
			"displayName": "Propagate To Existing Lists",
			"name": "propagateToExistingLists",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "propagateToExistingLists",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Content Types Content Type Associate With Hub Sites"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/microsoft.graph.copyToDefaultContentLocation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Content Types Content Type Copy To Default Content Location"
					]
				}
			}
		},
		{
			"displayName": "Destination File Name",
			"name": "destinationFileName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "destinationFileName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Content Types Content Type Copy To Default Content Location"
					]
				}
			}
		},
		{
			"displayName": "Source File",
			"name": "sourceFile",
			"type": "json",
			"default": "{\n  \"sharepointIds\": {}\n}",
			"routing": {
				"send": {
					"property": "sourceFile",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Content Types Content Type Copy To Default Content Location"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/microsoft.graph.publish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Content Types Content Type Publish"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/contentTypes/{contentType-id}/microsoft.graph.unpublish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Content Types Content Type Unpublish"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/microsoft.graph.evaluate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Information Protection Data Loss Prevention Policies Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Evaluation Input",
			"name": "evaluationInput",
			"type": "json",
			"default": "{\n  \"currentLabel\": {},\n  \"discoveredSensitiveTypes\": [\n    {\n      \"classificationAttributes\": [\n        {}\n      ]\n    }\n  ]\n}",
			"routing": {
				"send": {
					"property": "evaluationInput",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Information Protection Data Loss Prevention Policies Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Notification Info",
			"name": "notificationInfo",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "notificationInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Information Protection Data Loss Prevention Policies Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Target",
			"name": "target",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "target",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Information Protection Data Loss Prevention Policies Evaluate"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/microsoft.graph.evaluate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Information Protection Sensitivity Labels Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Current Label",
			"name": "currentLabel",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "currentLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Information Protection Sensitivity Labels Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Discovered Sensitive Types",
			"name": "discoveredSensitiveTypes",
			"type": "json",
			"default": "[\n  {\n    \"classificationAttributes\": [\n      {}\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "discoveredSensitiveTypes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Information Protection Sensitivity Labels Evaluate"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/microsoft.graph.evaluate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Information Protection Sensitivity Labels Sensitivity Label Sublabels Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Current Label",
			"name": "currentLabel",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "currentLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Information Protection Sensitivity Labels Sensitivity Label Sublabels Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Discovered Sensitive Types",
			"name": "discoveredSensitiveTypes",
			"type": "json",
			"default": "[\n  {\n    \"classificationAttributes\": [\n      {}\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "discoveredSensitiveTypes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Information Protection Sensitivity Labels Sensitivity Label Sublabels Evaluate"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/microsoft.graph.addCopy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Lists List Content Types Add Copy"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "contentType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "contentType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Lists List Content Types Add Copy"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/microsoft.graph.addCopyFromContentTypeHub",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Lists List Content Types Add Copy From Content Type Hub"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id",
			"name": "contentTypeId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "contentTypeId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Lists List Content Types Add Copy From Content Type Hub"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/microsoft.graph.associateWithHubSites",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Lists List Content Types Content Type Associate With Hub Sites"
					]
				}
			}
		},
		{
			"displayName": "Hub Site Urls",
			"name": "hubSiteUrls",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "hubSiteUrls",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Lists List Content Types Content Type Associate With Hub Sites"
					]
				}
			}
		},
		{
			"displayName": "Propagate To Existing Lists",
			"name": "propagateToExistingLists",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "propagateToExistingLists",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Lists List Content Types Content Type Associate With Hub Sites"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/microsoft.graph.copyToDefaultContentLocation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Lists List Content Types Content Type Copy To Default Content Location"
					]
				}
			}
		},
		{
			"displayName": "Destination File Name",
			"name": "destinationFileName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "destinationFileName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Lists List Content Types Content Type Copy To Default Content Location"
					]
				}
			}
		},
		{
			"displayName": "Source File",
			"name": "sourceFile",
			"type": "json",
			"default": "{\n  \"sharepointIds\": {}\n}",
			"routing": {
				"send": {
					"property": "sourceFile",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Lists List Content Types Content Type Copy To Default Content Location"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/microsoft.graph.publish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Lists List Content Types Content Type Publish"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/microsoft.graph.unpublish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Lists List Content Types Content Type Unpublish"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/microsoft.graph.restore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Lists List Items List Item Document Set Versions Document Set Version Restore"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/microsoft.graph.createLink",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Lists List Items List Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Expiration Date Time",
			"name": "expirationDateTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "expirationDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Lists List Items List Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Lists List Items List Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Recipients",
			"name": "recipients",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "recipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Lists List Items List Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Retain Inherited Permissions",
			"name": "retainInheritedPermissions",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "retainInheritedPermissions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Lists List Items List Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "scope",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Lists List Items List Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Lists List Items List Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/microsoft.graph.restoreVersion",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Lists List Items List Item Versions List Item Version Restore Version"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/microsoft.graph.reauthorize",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Lists List Subscriptions Subscription Reauthorize"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/onenote/notebooks/microsoft.graph.getNotebookFromWebUrl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Get Notebook From Web Url"
					]
				}
			}
		},
		{
			"displayName": "Web Url",
			"name": "webUrl",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "webUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Get Notebook From Web Url"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/onenote/notebooks/{notebook-id}/microsoft.graph.copyNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Copy Notebook"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Copy Notebook"
					]
				}
			}
		},
		{
			"displayName": "Notebook Folder",
			"name": "notebookFolder",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "notebookFolder",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Copy Notebook"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Copy Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Copy Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Copy Notebook"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/microsoft.graph.copyToNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/microsoft.graph.copyToSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.copyToSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.onenotePatchContent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "Commands",
			"name": "commands",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "commands",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/microsoft.graph.copyToNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/microsoft.graph.copyToSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.copyToSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.onenotePatchContent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "Commands",
			"name": "commands",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "commands",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/microsoft.graph.copyToSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/onenote/pages/{onenotePage-id}/microsoft.graph.onenotePatchContent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "Commands",
			"name": "commands",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "commands",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/microsoft.graph.copyToNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/microsoft.graph.copyToSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.copyToSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.onenotePatchContent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "Commands",
			"name": "commands",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "commands",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/onenote/sections/{onenoteSection-id}/microsoft.graph.copyToNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/onenote/sections/{onenoteSection-id}/microsoft.graph.copyToSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.copyToSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.onenotePatchContent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Sections Onenote Section Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "Commands",
			"name": "commands",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "commands",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Onenote Sections Onenote Section Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/pages/{sitePage-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}/microsoft.graph.getPositionOfWebPart",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Pages Site Page Canvas Layout Horizontal Sections Horizontal Section Columns Horizontal Section Column Webparts Web Part Get Position Of Web Part"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/pages/{sitePage-id}/canvasLayout/verticalSection/webparts/{webPart-id}/microsoft.graph.getPositionOfWebPart",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Pages Site Page Canvas Layout Vertical Section Webparts Web Part Get Position Of Web Part"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/pages/{sitePage-id}/microsoft.graph.getWebPartsByPosition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Pages Site Page Get Web Parts By Position"
					]
				}
			}
		},
		{
			"displayName": "Column Id",
			"name": "columnId",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "columnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Pages Site Page Get Web Parts By Position"
					]
				}
			}
		},
		{
			"displayName": "Horizontal Section Id",
			"name": "horizontalSectionId",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "horizontalSectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Pages Site Page Get Web Parts By Position"
					]
				}
			}
		},
		{
			"displayName": "Is In Vertical Section",
			"name": "isInVerticalSection",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "isInVerticalSection",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Pages Site Page Get Web Parts By Position"
					]
				}
			}
		},
		{
			"displayName": "Web Part Index",
			"name": "webPartIndex",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "webPartIndex",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Pages Site Page Get Web Parts By Position"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/pages/{sitePage-id}/microsoft.graph.publish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Pages Site Page Publish"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/pages/{sitePage-id}/webParts/{webPart-id}/microsoft.graph.getPositionOfWebPart",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Pages Site Page Web Parts Web Part Get Position Of Web Part"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/permissions/{permission-id}/microsoft.graph.grant",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Permissions Permission Grant"
					]
				}
			}
		},
		{
			"displayName": "Recipients",
			"name": "recipients",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "recipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Permissions Permission Grant"
					]
				}
			}
		},
		{
			"displayName": "Roles",
			"name": "roles",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "roles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Permissions Permission Grant"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/sites/{site-id}/permissions/{permission-id}/microsoft.graph.revokeGrants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Permissions Permission Revoke Grants"
					]
				}
			}
		},
		{
			"displayName": "Grantees",
			"name": "grantees",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "grantees",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Sites Site Permissions Permission Revoke Grants"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/members/microsoft.graph.add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Channels Channel Members Add"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "[\n  {\n    \"roles\": [\n      null\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Channels Channel Members Add"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/microsoft.graph.setReaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Channels Channel Messages Chat Message Set Reaction"
					]
				}
			}
		},
		{
			"displayName": "Reaction Type",
			"name": "reactionType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reactionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Channels Channel Messages Chat Message Set Reaction"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/microsoft.graph.softDelete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Channels Channel Messages Chat Message Soft Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/microsoft.graph.undoSoftDelete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Channels Channel Messages Chat Message Undo Soft Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/microsoft.graph.unsetReaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Channels Channel Messages Chat Message Unset Reaction"
					]
				}
			}
		},
		{
			"displayName": "Reaction Type",
			"name": "reactionType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reactionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Channels Channel Messages Chat Message Unset Reaction"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/microsoft.graph.setReaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Channels Channel Messages Chat Message Replies Chat Message Set Reaction"
					]
				}
			}
		},
		{
			"displayName": "Reaction Type",
			"name": "reactionType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reactionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Channels Channel Messages Chat Message Replies Chat Message Set Reaction"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/microsoft.graph.softDelete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Channels Channel Messages Chat Message Replies Chat Message Soft Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/microsoft.graph.undoSoftDelete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Channels Channel Messages Chat Message Replies Chat Message Undo Soft Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/microsoft.graph.unsetReaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Channels Channel Messages Chat Message Replies Chat Message Unset Reaction"
					]
				}
			}
		},
		{
			"displayName": "Reaction Type",
			"name": "reactionType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reactionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Channels Channel Messages Chat Message Replies Chat Message Unset Reaction"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/microsoft.graph.completeMigration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Channels Channel Complete Migration"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/microsoft.graph.provisionEmail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Channels Channel Provision Email"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/microsoft.graph.removeEmail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Channels Channel Remove Email"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/microsoft.graph.upgrade",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Installed Apps Teams App Installation Upgrade"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/members/microsoft.graph.add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Members Add"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "[\n  {\n    \"roles\": [\n      null\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Members Add"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/microsoft.graph.archive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Archive"
					]
				}
			}
		},
		{
			"displayName": "Should Set Spo Site Read Only For Members",
			"name": "shouldSetSpoSiteReadOnlyForMembers",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "shouldSetSpoSiteReadOnlyForMembers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Archive"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/microsoft.graph.clone",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Clone"
					]
				}
			}
		},
		{
			"displayName": "Classification",
			"name": "classification",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "classification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Clone"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Clone"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Clone"
					]
				}
			}
		},
		{
			"displayName": "Mail Nickname",
			"name": "mailNickname",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "mailNickname",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Clone"
					]
				}
			}
		},
		{
			"displayName": "Parts To Clone",
			"name": "partsToClone",
			"type": "options",
			"default": "apps",
			"options": [
				{
					"name": "Apps",
					"value": "apps"
				},
				{
					"name": "Tabs",
					"value": "tabs"
				},
				{
					"name": "Settings",
					"value": "settings"
				},
				{
					"name": "Channels",
					"value": "channels"
				},
				{
					"name": "Members",
					"value": "members"
				}
			],
			"routing": {
				"send": {
					"property": "partsToClone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Clone"
					]
				}
			}
		},
		{
			"displayName": "Visibility",
			"name": "visibility",
			"type": "options",
			"default": "private",
			"options": [
				{
					"name": "Private",
					"value": "private"
				},
				{
					"name": "Public",
					"value": "public"
				},
				{
					"name": "Hidden Membership",
					"value": "hiddenMembership"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"routing": {
				"send": {
					"property": "visibility",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Clone"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/microsoft.graph.completeMigration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Complete Migration"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/microsoft.graph.sendActivityNotification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Send Activity Notification"
					]
				}
			}
		},
		{
			"displayName": "Activity Type",
			"name": "activityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "activityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Send Activity Notification"
					]
				}
			}
		},
		{
			"displayName": "Chain Id",
			"name": "chainId",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chainId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Send Activity Notification"
					]
				}
			}
		},
		{
			"displayName": "Preview Text",
			"name": "previewText",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "previewText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Send Activity Notification"
					]
				}
			}
		},
		{
			"displayName": "Recipient",
			"name": "recipient",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "recipient",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Send Activity Notification"
					]
				}
			}
		},
		{
			"displayName": "Template Parameters",
			"name": "templateParameters",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "templateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Send Activity Notification"
					]
				}
			}
		},
		{
			"displayName": "Topic",
			"name": "topic",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "topic",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Send Activity Notification"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/microsoft.graph.unarchive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Unarchive"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/permissionGrants/microsoft.graph.getByIds",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Permission Grants Get By Ids"
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
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Permission Grants Get By Ids"
					]
				}
			}
		},
		{
			"displayName": "Types",
			"name": "types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Permission Grants Get By Ids"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/permissionGrants/microsoft.graph.getUserOwnedObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Permission Grants Get User Owned Objects"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Permission Grants Get User Owned Objects"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Permission Grants Get User Owned Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/permissionGrants/microsoft.graph.validateProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Permission Grants Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Permission Grants Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "Entity Type",
			"name": "entityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "entityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Permission Grants Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "Mail Nickname",
			"name": "mailNickname",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "mailNickname",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Permission Grants Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "On Behalf Of User Id",
			"name": "onBehalfOfUserId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "onBehalfOfUserId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Permission Grants Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}/microsoft.graph.checkMemberGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Permission Grants Resource Specific Permission Grant Check Member Groups"
					]
				}
			}
		},
		{
			"displayName": "Group Ids",
			"name": "groupIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Permission Grants Resource Specific Permission Grant Check Member Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}/microsoft.graph.checkMemberObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Permission Grants Resource Specific Permission Grant Check Member Objects"
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
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Permission Grants Resource Specific Permission Grant Check Member Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}/microsoft.graph.getMemberGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Permission Grants Resource Specific Permission Grant Get Member Groups"
					]
				}
			}
		},
		{
			"displayName": "Security Enabled Only",
			"name": "securityEnabledOnly",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "securityEnabledOnly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Permission Grants Resource Specific Permission Grant Get Member Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}/microsoft.graph.getMemberObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Permission Grants Resource Specific Permission Grant Get Member Objects"
					]
				}
			}
		},
		{
			"displayName": "Security Enabled Only",
			"name": "securityEnabledOnly",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "securityEnabledOnly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Permission Grants Resource Specific Permission Grant Get Member Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}/microsoft.graph.restore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Permission Grants Resource Specific Permission Grant Restore"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/members/microsoft.graph.add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Primary Channel Members Add"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "[\n  {\n    \"roles\": [\n      null\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Primary Channel Members Add"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/microsoft.graph.setReaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Primary Channel Messages Chat Message Set Reaction"
					]
				}
			}
		},
		{
			"displayName": "Reaction Type",
			"name": "reactionType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reactionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Primary Channel Messages Chat Message Set Reaction"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/microsoft.graph.softDelete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Primary Channel Messages Chat Message Soft Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/microsoft.graph.undoSoftDelete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Primary Channel Messages Chat Message Undo Soft Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/microsoft.graph.unsetReaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Primary Channel Messages Chat Message Unset Reaction"
					]
				}
			}
		},
		{
			"displayName": "Reaction Type",
			"name": "reactionType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reactionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Primary Channel Messages Chat Message Unset Reaction"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/microsoft.graph.setReaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Primary Channel Messages Chat Message Replies Chat Message Set Reaction"
					]
				}
			}
		},
		{
			"displayName": "Reaction Type",
			"name": "reactionType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reactionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Primary Channel Messages Chat Message Replies Chat Message Set Reaction"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/microsoft.graph.softDelete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Primary Channel Messages Chat Message Replies Chat Message Soft Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/microsoft.graph.undoSoftDelete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Primary Channel Messages Chat Message Replies Chat Message Undo Soft Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/microsoft.graph.unsetReaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Primary Channel Messages Chat Message Replies Chat Message Unset Reaction"
					]
				}
			}
		},
		{
			"displayName": "Reaction Type",
			"name": "reactionType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reactionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Primary Channel Messages Chat Message Replies Chat Message Unset Reaction"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/microsoft.graph.completeMigration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Primary Channel Complete Migration"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/microsoft.graph.provisionEmail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Primary Channel Provision Email"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/microsoft.graph.removeEmail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Primary Channel Remove Email"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/microsoft.graph.share",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Schedule Share"
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
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Schedule Share"
					]
				}
			}
		},
		{
			"displayName": "Notify Team",
			"name": "notifyTeam",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "notifyTeam",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Schedule Share"
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
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Schedule Share"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/timeCards/microsoft.graph.clockIn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Schedule Time Cards Clock In"
					]
				}
			}
		},
		{
			"displayName": "At Approved Location",
			"name": "atApprovedLocation",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "atApprovedLocation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Schedule Time Cards Clock In"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Schedule Time Cards Clock In"
					]
				}
			}
		},
		{
			"displayName": "On Behalf Of User Id",
			"name": "onBehalfOfUserId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "onBehalfOfUserId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Schedule Time Cards Clock In"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/microsoft.graph.clockOut",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Schedule Time Cards Time Card Clock Out"
					]
				}
			}
		},
		{
			"displayName": "At Approved Location",
			"name": "atApprovedLocation",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "atApprovedLocation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Schedule Time Cards Time Card Clock Out"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Schedule Time Cards Time Card Clock Out"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/microsoft.graph.confirm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Schedule Time Cards Time Card Confirm"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/microsoft.graph.endBreak",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Schedule Time Cards Time Card End Break"
					]
				}
			}
		},
		{
			"displayName": "At Approved Location",
			"name": "atApprovedLocation",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "atApprovedLocation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Schedule Time Cards Time Card End Break"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Schedule Time Cards Time Card End Break"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/microsoft.graph.startBreak",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Schedule Time Cards Time Card Start Break"
					]
				}
			}
		},
		{
			"displayName": "At Approved Location",
			"name": "atApprovedLocation",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "atApprovedLocation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Schedule Time Cards Time Card Start Break"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Team Schedule Time Cards Time Card Start Break"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/threads/{conversationThread-id}/microsoft.graph.reply",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Threads Conversation Thread Reply"
					]
				}
			}
		},
		{
			"displayName": "Post",
			"name": "Post",
			"type": "string",
			"default": {
				"categories": [
					null
				]
			},
			"routing": {
				"send": {
					"property": "Post",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Threads Conversation Thread Reply"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Threads Conversation Thread Posts Post Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Attachment Item",
			"name": "AttachmentItem",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "AttachmentItem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Threads Conversation Thread Posts Post Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Threads Conversation Thread Posts Post In Reply To Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Attachment Item",
			"name": "AttachmentItem",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "AttachmentItem",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Threads Conversation Thread Posts Post In Reply To Attachments Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/microsoft.graph.forward",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Threads Conversation Thread Posts Post In Reply To Forward"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Threads Conversation Thread Posts Post In Reply To Forward"
					]
				}
			}
		},
		{
			"displayName": "To Recipients",
			"name": "ToRecipients",
			"type": "json",
			"default": "[\n  {\n    \"emailAddress\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "ToRecipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Threads Conversation Thread Posts Post In Reply To Forward"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/microsoft.graph.reply",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Threads Conversation Thread Posts Post In Reply To Reply"
					]
				}
			}
		},
		{
			"displayName": "Post",
			"name": "Post",
			"type": "string",
			"default": {
				"categories": [
					null
				]
			},
			"routing": {
				"send": {
					"property": "Post",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Threads Conversation Thread Posts Post In Reply To Reply"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/microsoft.graph.forward",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Threads Conversation Thread Posts Post Forward"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Threads Conversation Thread Posts Post Forward"
					]
				}
			}
		},
		{
			"displayName": "To Recipients",
			"name": "ToRecipients",
			"type": "json",
			"default": "[\n  {\n    \"emailAddress\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "ToRecipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Threads Conversation Thread Posts Post Forward"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/microsoft.graph.reply",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Threads Conversation Thread Posts Post Reply"
					]
				}
			}
		},
		{
			"displayName": "Post",
			"name": "Post",
			"type": "string",
			"default": {
				"categories": [
					null
				]
			},
			"routing": {
				"send": {
					"property": "Post",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Actions"
					],
					"operation": [
						"Groups Group Threads Conversation Thread Posts Post Reply"
					]
				}
			}
		},
];
